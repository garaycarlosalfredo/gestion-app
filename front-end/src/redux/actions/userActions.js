import {
    USER_SET,
    USER_CLEAN,
} from '../types/userTypes'

//LOGIN
export function userSetRedux(user){
    return (dispatch)=>{
        dispatch(userSetState(user))
    }
}

export function userCleanRedux(){
    return(dispatch)=>{
        dispatch(userCleanState())
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
