import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import githubReducer from './githubReducer'


const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  github: githubReducer
})


export default rootReducer
