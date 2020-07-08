import couterreducer from './counterreducer'
import logginreducer from './logginreducer'
import {combineReducers} from 'redux'

const allReducers= combineReducers({
    counter: couterreducer,
    logged: logginreducer
})

export default allReducers