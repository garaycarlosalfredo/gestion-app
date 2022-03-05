import axios from 'axios'
import {getLocalToken} from '../../util/auth'

export const clienteAxios = axios.create({
    //baseURL : process.env.REACT_APP_BACKEND_URL
    baseURL : 'http://localhost:4000'
})


export const createHeader = ()=>{
    //let token = localStorage.getItem("token")
    const token = getLocalToken()//Toma el token en el local Storage
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    }
}