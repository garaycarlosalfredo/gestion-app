import {
USER_SET,
USER_CLEAN
} from '../types/userTypes'

//Cada reducer tiene su propio state

const initialState = {
    userState : null,
}

export default function user(state = initialState, action){
    switch(action.type){
        case USER_SET:
            return{
                ...state,
                userState: action.payload
            }
        case USER_CLEAN:
            return{
                ...state,
                userState: action.payload
            }

        default:
            return state;
        
    }
}
