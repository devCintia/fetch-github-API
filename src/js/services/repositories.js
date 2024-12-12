import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getrepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`) //busca só 10 repositórios
    return await response.json()
}

export { getrepositories }