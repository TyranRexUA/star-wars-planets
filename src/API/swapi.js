import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

const swapi = {
    getPlanets() { // get planets(page=1)
        return instance.get('planets/').then(response => response.data)
    },

    getMorePlanets(next) { // get planets(page=2, 3, ...), depends on url(next)
        return axios.get(next.replace('http', 'https')).then(response => response.data)
    },

    getPlanetDetails(id) {
        return instance.get(`planets/${id}/`).then(response => response.data)
    },

    getPersonName(url) { // get person name from person url
        return axios.get(url.replace('http', 'https')).then(response => response.data.name)
    },

    searchPlanets(searchValue) { // search planets(page=1)
        return axios.get(`https://swapi.dev/api/planets/?search=${searchValue}`).then(response => response.data)
    }
}

export default swapi;