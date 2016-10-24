import axios from 'axios'
import { browserHistory } from 'react-router'

const connectGithub = (ghCode)=>{
   return axios({
      url: "http://localhost:3000/api/v1/github-callback",
      method:'post',
      headers: { Authorization: localStorage.getItem('token')},
      data: { code: ghCode }
   })
    .then((response)=>{
      if (response.data.connected === "True"){
        browserHistory.push('/')
        return {type: 'GH_CONNECTED', payload: true}
      }else {
        browserHistory.push('/')
        return {type: 'GH_CONNECTED', payload: false}
      }
    })
    .catch( error => {
      browserHistory.push('/connected')
      console.log(error)
      return {type: 'GH_CONNECTED', payload: false}
    })
}

export default connectGithub
