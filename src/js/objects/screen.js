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
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br>
            <section class="repoInformation">
                <div><i class="fa-solid fa-code-fork"></i> ${repo.forks}</div>
                <div><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</div>
                <div><i class="fa-solid fa-eye"></i> ${repo.watchers}</div>
                <div><i class="fa-solid fa-laptop-code"></i> ${repo.language ?? 'Indefinida'}</div>
            </section>
            
            </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens} </ul>
                                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(ev => {
            const eventName = ev.repo.name
            const eventsCommits = ev.payload.commits
            if (ev.type === "PushEvent") {
                eventsCommits.forEach(msg => {
                    const eventMsg = msg.message

                    eventsItens += `<li>"${eventName}" - "${eventMsg}" </li>`
                })
            } else if (ev.type === "CreateEvent") {
                eventsItens += `<li><strong>${eventName}</strong> - Sem msg de commit</li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                                <h2>Eventos</h2>
                                                                <ul>${eventsItens}</ul>
                                                            </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}
export { screen }