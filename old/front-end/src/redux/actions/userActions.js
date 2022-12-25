import {
    USER_SET,
    USER_CLEAN,
} from '../types/userTypes'


//Service
import {axiosSignIn,axiosGetUser,axiosSignUp} from '../../service/authService'
//Util
import {setlocalUser,setlocalToken,checkResponseNok,localUserClear,getLocalUser} from '../../util/auth'
//Url values
const mainUrl = process.env.REACT_APP_MAIN_URL//Check change for env
const homeUrl = process.env.REACT_APP_HOME_URL//Check change for env

export function actionSignIn(user){
    return async (dispatch)=>{

        const response = await axiosSignIn(user)
        //console.log('await axiosSignIn(user) response',response)
        if(checkResponseNok(response)) return response
        setlocalToken(response.token)
        const responseUser = await axiosGetUser()
        //console.log('await axiosGetUser(user) userActual',userActual)
        if(checkResponseNok(responseUser)) return responseUser
        setlocalUser(responseUser)
        dispatch(userSetState(responseUser))
        response.navigate = mainUrl
        return response
    }
}
export function actionSignUp(user){
    return async (dispatch)=>{

        const response = await axiosSignUp(user)
        if(checkResponseNok(response)) return response
        //console.log(response)
        setlocalToken(response.token)
        const responseUser = await axiosGetUser()
        if(checkResponseNok(responseUser)) return responseUser
        setlocalUser(responseUser)
        dispatch(userSetState(responseUser))
        response.navigate = mainUrl
        //console.log('env ',process.env.REACT_APP_MAIN_URL)
        return response
    }
}
export function ActionRefreshFromLocal(user){
    return (dispatch)=>{
        dispatch(userSetState(getLocalUser()))
    }
}

export function userSetRedux(user){
    return (dispatch)=>{
        dispatch(userSetState(user))
    }
}

export function actionSignOut(){
    return(dispatch)=>{
        localUserClear()
        dispatch(userCleanState())
        const response = {navigate : homeUrl}
        return response
    }
}

const userSetState = (user)=>({
    type: USER_SET,
    payload: user
})

const userCleanState = ()=>({
    type: USER_CLEAN,
    payload: null
})
