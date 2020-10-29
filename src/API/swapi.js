import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

const swapi = {
    getPlanets() {
        return instance.get('planets/').then(response => {
            return response.data
        })
    },

    getMorePlanets(next) {
        return axios.get(next).then(response => response.data)
    },

    getPlanetDetails(id) {
        return instance.get(`planets/${id}/`).then(response => {
            return response.data
        })
    },

    gePersonName(url) {
        console.log('+++')
        return axios.get(url).then(response => response.data.name)
    },
}

export default swapi;