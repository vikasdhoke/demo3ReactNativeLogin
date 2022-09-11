// import navigateto from "./reducers"
import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
// import navigatetoa from './LoginOut'

const reducers = combineReducers({
//  = combineReducers({
    numOfCakes: cakeReducer
})

export default reducers
 