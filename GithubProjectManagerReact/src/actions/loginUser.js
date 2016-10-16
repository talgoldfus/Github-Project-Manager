import axios from 'axios'
import { browserHistory } from 'react-router'


export default function loginUser(formProps) {
 return axios.post("http://localhost:3000/auth_user",{
      username: `${formProps.username}`,
      password: `${formProps.password}`
    }
  ).then((response)=>{
      console.log(response)
      localStorage.setItem('token', response.data.auth_token)
      // browserHistory.push('/test')
      return {type: 'LOG_IN', payload: true}
    })
}
