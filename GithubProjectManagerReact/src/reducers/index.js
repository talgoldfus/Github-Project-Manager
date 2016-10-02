import { combineReducers } from 'redux'
import authReducer from './authReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  authentication: authReducer,
  user
})


export default rootReducer
