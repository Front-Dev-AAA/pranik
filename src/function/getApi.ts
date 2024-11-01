import axios from 'axios';
import { url } from '../components/const';


export const getApiData = async () => {
    return axios.get(`${url}/ru/data/v3/testmethods/docs/userdocs/get`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'x-auth': ` ${localStorage.token}`
        },
    })
};