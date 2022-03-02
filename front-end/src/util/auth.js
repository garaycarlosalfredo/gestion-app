import {axiosGetUser} from '../service/authService'
const userInLocal = 'user'


export const setlocalUser = async (token) =>{   //Con un token válido se obtiene el usuario actual y se guarda en local storage
    localStorage.setItem("token", token);
    const user = axiosGetUser()
    localStorage.setItem(userInLocal,JSON.stringify(user))
    let values = await Promise.all([user])
    return user
}

export const checkUserAuth = ()=>{  //Verifica que haya un usuario en local storage
    const user =  JSON.parse(localStorage.getItem(userInLocal))
    console.log('user',user)
    if(user !== undefined && user !== null){
        return true
    }else{
        return false
    }
}

export const getLocalUser = () =>{  //Obtiene el usuario del local storage
    return JSON.parse(localStorage.getItem(userInLocal))
}

export const localUserClear = token =>{ //Borra el local Storage
    localStorage.clear()
}