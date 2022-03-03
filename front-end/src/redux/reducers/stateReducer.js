import {
STATE_CLEAN,
STATE_SET
} from '../types/stateTypes'

//Cada reducer tiene su propio state

const initialState = {
    appState : null,
}

export default function user(state = initialState, action){
    switch(action.type){
        case STATE_SET:
            return{
                ...state,
                appState: action.payload
            }
        case STATE_CLEAN:
            return{
                ...state,
                appState: action.payload
            }

        default:
            return state        
    }
}
