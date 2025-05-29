import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const response = axios.get(`${url}/all`)
    return response.then(r => r.data)
}

export default {
    getAll
}