import axios from 'axios'
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'
import { batchActions } from 'redux-batched-actions';

export default function loginUserAction(formProps,dispatch) {
 return axios.post("http://localhost:3000/auth_user",{
      username: `${formProps.username}`,
      password: `${formProps.password}`
    }
  ).then((response)=>{
      if (response.data.auth_token){
        localStorage.setItem('token', response.data.auth_token)
        localStorage.setItem('username', response.data.user.username)

        browserHistory.push('/')
        dispatch(batchActions(
          [{type: 'LOG_IN', payload: true},
          {type: 'GH_CONNECTED', payload: response.data.user.connected}])
        )
      }
    }).catch((error)=>{
      if (error.response.status === 500){
        throw new SubmissionError({ password: 'Invalid Username' })}
      else{
        throw new SubmissionError({ password: 'Invalid Password' })
      }
    })
}
