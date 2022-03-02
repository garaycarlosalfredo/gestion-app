import axios from 'axios'

export const clienteAxios = axios.create({
    //baseURL : process.env.REACT_APP_BACKEND_URL
    baseURL : 'http://localhost:4000'
})


export const createHeader = ()=>{
    let token = localStorage.getItem("token")
    
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    }
}