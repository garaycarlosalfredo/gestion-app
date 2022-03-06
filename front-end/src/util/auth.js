import {axiosGetUser} from '../service/authService'
const userInLocal = 'userLocal'
const tokenInLocal = 'token'

export const checkResponseNok = (response) =>{   //Con un token válido se obtiene el usuario actual y se guarda en local storage
    if(response !== null && response.data !== undefined && response.status !== 200){
        return true
    }else{
        return false
    }
}

export const checkReduxUserIsPresent = (userRedux) =>{   //Con un token válido se obtiene el usuario actual y se guarda en local storage
    if(userRedux !== undefined && userRedux!== null){
        return true
    }else{
        return false
    }
}

export const setlocalUser = (user) =>{   //Con un token válido se obtiene el usuario actual y se guarda en local storage
    localStorage.setItem(userInLocal,JSON.stringify(user))
    return user
}
export const setlocalToken = (token) =>{   //Con un token válido se obtiene el usuario actual y se guarda en local storage
    localStorage.setItem(tokenInLocal,token)
    return token
}

export const checkUserAuth = ()=>{  //Verifica que haya un usuario en local storage
    const user =  JSON.parse(localStorage.getItem(userInLocal))
    //console.log('user',user)
    if(user !== undefined && user !== null){
        //console.log("USER OK ",user)
        return true
    }else{
        //console.log("USER NO OK ",user)
        return false
    }
}
export const getLocalToken = () =>{  //Obtiene el usuario del local storage
    return localStorage.getItem(tokenInLocal)
}

export const getLocalUser = () =>{  //Obtiene el usuario del local storage
    return JSON.parse(localStorage.getItem(userInLocal))
}

export const localUserClear = token =>{ //Borra el local Storage
    localStorage.clear()
}