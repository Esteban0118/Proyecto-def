import axios from 'axios';

const BASE_URL = 'https://localhost:44362/api/';

export const ENDPOINTS = {
    TEMPERATURA: 'Temperatura'
}

export const createAPIEndpoint = endpoint => {
    
    let url = BASE_URL + endpoint + '/';
    return{

        fetchAll : () => axios.get(url),
        fetchByCity : ciudad => axios.get(url + ciudad),
        create : newRecord => axios.post(url, newRecord)
    }
}