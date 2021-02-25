import request from 'superagent'

const apiURL = 'https://evening-bayou-98803.herokuapp.com';

export async function getCharacters() {
    let response = await request.get(`${apiURL}/characters`);
    return response.body
}

export async function getCategories() {
    let response = await request.get(`${apiURL}/categories`);
    return response.body
}

export async function getCharacter(name) {
    let response = await request.get(`${apiURL}/characters/${name}`)
    return response.body
}

export async function deleteCharacter(name) {
    let response = await request.delete(`${apiURL}/characters/${name}`)
    return response.body
}

export async function createCharacter(character) {
    await request.post(`${apiURL}/characters`).send(character);
}

export async function updateCharacter(name, character) {
    await request.put(`${apiURL}/characters/${name}`).send(character)
}
