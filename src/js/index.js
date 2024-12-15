import { getUser } from './services/user.js'
import { getrepositories } from './services/repositories.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js';
import { getEvents } from './services/events.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})


//para adicionar o evento ao pressionar a tecla enter:
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    console.log(userResponse)

    const repositoriesResponse = await getrepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    console.log(repositoriesResponse)
 
    const eventsResponse = await getEvents(userName)
    const events = eventsResponse.filter((event)=>{
        return event.type === "PushEvent" || event.type === "CreateEvent"})

    user.setEvents(events)
    console.log(events)

    screen.renderUser(user)

}