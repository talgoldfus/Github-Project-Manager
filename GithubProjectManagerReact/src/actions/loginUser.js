import axios from 'axios'
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

export default function loginUser(formProps,dispatch) {
 return axios.post("http://localhost:3000/auth_user",{
      username: `${formProps.username}`,
      password: `${formProps.password}`
    }
  ).then((response)=>{
      if (response.data.auth_token){
      localStorage.setItem('token', response.data.auth_token)
      browserHistory.push('/')
      return dispatch({type: 'LOG_IN', payload: true})
      }
    }).catch((error)=>{
      if (error.response.status === 500){
        throw new SubmissionError({ password: 'Invalid Username' })}
      else{
        throw new SubmissionError({ password: 'Invalid Password' })
      }
    })
}
