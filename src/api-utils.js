import request from 'superagent'

const apiURL = 'https://evening-bayou-98803.herokuapp.com/';

export async function getCharacters() {
    let response = await request.get(`${apiURL}/characters`);
    return response.body
}

export async function getCategories() {
    let response = await request.get(`${apiURL}/categories`);
    return response.body
}

export async function getCharacter(name) {
    let response = await request.get(`${apiURL}/categories/${name}`)
    return response.body
}

export async function deleteCharacter(name) {
    let response = await request.delete(`${apiURL}/categories/${name}`)
    return response.body
}

export async function createCharacter(character) {
    let response = await request.post(`${apiURL}/characters`).send(character);
    return response.body
}
