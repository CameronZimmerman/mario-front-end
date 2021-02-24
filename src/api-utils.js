import request from 'superagent';

const apiURL = 'https://evening-bayou-98803.herokuapp.com/';

export async function getCharacters() {
    let response = await request.get(`${apiURL}/characters`);
    return response.body
}

export async function getCategories() {
    let response = await request.get(`${apiURL}/categories`);
    return response.body
}