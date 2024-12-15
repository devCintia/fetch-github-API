const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                         <div class="data">
                         <h1>${user.name ?? 'Nao possui nome cadastrado 😢'}</h1>
                         <p>${user.bio ?? 'Nao possui bio cadastrada 😢'}</p>
                         <p>Seguidores:🏃‍♂️‍➡️${user.followers ?? 'Nao possui seguidores 😢'}</p>
                         <p>Seguindo:🕵️‍♂️ ${user.following ?? 'Nao está seguindo ninguém 😢'}</p>
                        </div>
                         </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><img src="./src/images/repo-forked.svg"> ${repo.forks}  ⭐${repo.stargazers_count}  <img src="./src/images/eye.svg"> ${repo.watchers}  <img src="./src/images/code-review.svg"> ${repo.language ?? 'Indefinida'}</a></li>`)
       
        
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens} </ul>
                                                            </div>`                                   
        }
       
        let eventsItens = ''
        user.events.forEach(ev => {
            const eventName = ev.repo.name
            const eventsCommits = ev.payload.commits   
                if(ev.type === "PushEvent"){
                    eventsCommits.forEach(msg =>{
                        const eventMsg = msg.message
                    
                

                eventsItens += `<li>"${eventName}" - "${eventMsg}" </li>`
            })
                    }else if(ev.type === "CreateEvent"){
                        eventsItens += 

                        `<li>
                        <p><span>${eventName}</span> - Não há commits</p></li>`}
                    })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                                <h2>Eventos</h2>
                                                                <ul>${eventsItens}</ul>
                                                            </div>`
        }

          // let commitItens = ""
        // user.events.payload.commits.forEach(commit => commitItens += `<p>"{commit.message}"</p>`)
        // console.log(commit)
        // user.events.payload.commits.forEach(commit => commitItens += `<p>"${commit.message}"</p>`)
        // console.log(commit)
       
        
    },

         
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}
export { screen }