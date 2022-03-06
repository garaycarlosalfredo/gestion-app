import axios from 'axios'
import {getLocalToken} from '../../util/auth'

export const clienteAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
    //baseURL : 'http://localhost:4000'
})


export const createHeader = ()=>{
    //console.log('process.env.REACT_APP_BACKEND_URL',process.env.REACT_APP_BACKEND_URL)
    //let token = localStorage.getItem("token")
    const token = getLocalToken()//Toma el token en el local Storage
    console.log('createHeader() token',token)
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    }
}