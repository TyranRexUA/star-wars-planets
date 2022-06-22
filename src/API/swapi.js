import { BASE_URL } from '../constants/general';

const convertResponse = async (response) => {
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    throw new Error();
}

const swapi = {
    getPlanets() { // get planets(page=1)
        return fetch(BASE_URL + 'planets/').then(convertResponse);
    },

    getMorePlanets(next) { // get planets(page=2, 3, ...), depends on url(next)
        return fetch(next).then(convertResponse)
    },

    getPlanetDetails(id) {
        return fetch(BASE_URL + `planets/${id}/`).then(convertResponse)
    },

    getPerson(url) { // get person from person url
        return fetch(url).then(convertResponse)
    },

    searchPlanets(searchValue) { // search planets(page=1)
        return fetch(BASE_URL + `planets/?search=${searchValue}`).then(convertResponse)
    }
}

export default swapi;