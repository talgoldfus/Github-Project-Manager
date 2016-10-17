import { combineReducers } from 'redux'
import authReducer from './authReducer'
import githubReducer from './githubReducer'

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  authentication: authReducer,
  form: formReducer,
  github: githubReducer
})


export default rootReducer
