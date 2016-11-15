import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import githubReducer from './githubReducer'
import projectReducer from './projectReducer'


const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  github: githubReducer,
  project:projectReducer
})


export default rootReducer
