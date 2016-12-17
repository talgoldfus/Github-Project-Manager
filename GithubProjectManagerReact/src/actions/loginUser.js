import axios from 'axios'
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

export default function loginUserAction(formProps,dispatch) {
 return axios.post("http://localhost:3000/auth_user",{
      username: localStorage.username,
      password: `${formProps.password}`
    }
  ).then((response)=>{
      if (response.data.auth_token){
        localStorage.setItem('token', response.data.auth_token)
        dispatch({type: 'LOGGED_IN', payload:{
          loggedIn: true,
          username: response.data.user.username }
        })
        browserHistory.push('/home')
      }
    }).catch((error)=>{
      if (error.response.status === 500){
        throw new SubmissionError({ password: 'Invalid Username' })}
      else{
        throw new SubmissionError({ password: 'Invalid Password' })
      }
    })
}
