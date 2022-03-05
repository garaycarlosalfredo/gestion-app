import {clienteAxios, createHeader} from './config/axios'



export const createUser = async (user) =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.post(`/api/user`,user,createHeader())
        respuesta = res.data
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error.response
    }
    return respuesta
}
export const axiosSignIn= async (user) =>{
    //console.log('En service user ',user)
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.post(`/api/auth`,user,createHeader())
        console.log('En service res',res)
        respuesta = res.data
        console.log('En service',respuesta)
        return respuesta
    } catch (error) {
        console.log('En service error',error)
        console.log('En service',error.response.data)
        respuesta = error.response
    }
    return respuesta
}

export const axiosGetUser = async () =>{
    let  respuesta = {}
    try {
        const  res  = await clienteAxios.get(`/api/auth`,createHeader())
        respuesta = res.data.user
        //console.log(respuesta)
        return respuesta
    } catch (error) {
        //console.log(error.response.data)
        respuesta = error.response
    }
    return respuesta
}