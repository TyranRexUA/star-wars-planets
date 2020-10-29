import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

const swapi = {
    getPlanets() { // get planets(page=1)
        return instance.get('planets/').then(response => {
            return response.data
        })
    },

    getMorePlanets(next) { // get planets(page=2, 3, ...), depends on url(next)
        return axios.get(next).then(response => response.data)
    },

    getPlanetDetails(id) {
        return instance.get(`planets/${id}/`).then(response => {
            return response.data
        })
    },

    getPersonName(url) { // get person name from person url
        return axios.get(url).then(response => response.data.name)
    },
}

export default swapi;