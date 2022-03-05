import {combineReducers} from 'redux'
import userReducer from './userReducer'
import stateReducer from './stateReducer';


export default combineReducers({
    appState : stateReducer,
    userStore : userReducer
})
