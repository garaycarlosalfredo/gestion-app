import React,{useContext, useEffect, useState} from 'react'
import {Route, Redirect, useNavigate} from 'react-router-dom'
//import AuthContext from '../../context/autenticacion/authContext'
//import AuthState from '../../context/autenticacion/authState'
//util auth
import {checkUserAuth} from '../../util/auth'

const RouteProtected = ({component : Component, ...props})=>{

    //const authContext = useContext(AuthContext)
    //const {autenticado, cargando, usuarioAutenticado} = authContext
    let navigate = useNavigate()
    const [authOk, setAuthOk] = useState(false)

    useEffect(()=>{
        //usuarioAutenticado()
        setAuthOk(checkUserAuth())
    },[])

    return(
        <Route {...props} render = {props=> authOk//!autenticado && !cargando? 
            ?
            navigate('/')
            :
            (<Component {...props}/>) }  //antes de renderear verifico si el usuario está autenticado
        
        />
    )
}

export default RouteProtected