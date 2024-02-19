import axios from 'axios'
import {PORT} from "../utils/consts";

const $host = axios.create({
    baseURL: PORT
})
const $authHost = axios.create({
    baseURL: PORT
})
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}