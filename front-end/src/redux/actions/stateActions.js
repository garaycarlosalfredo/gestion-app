import {
    STATE_CLEAN,
    STATE_SET,
} from '../types/stateTypes'

//LOGIN
export function stateSetRedux(state){
    return (dispatch)=>{
        dispatch(stateSetState(state))
    }
}

export function stateCleanRedux(){
    return(dispatch)=>{
        dispatch(stateCleanState())
    }
}

const stateSetState = (state)=>({
    type: STATE_SET,
    payload: state
})

const stateCleanState = ()=>({
    type: STATE_CLEAN,
    payload: null
})
