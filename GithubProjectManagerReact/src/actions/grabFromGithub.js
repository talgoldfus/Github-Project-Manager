import axios from 'axios'

export default function grabFromGithub(action,params=null) {
    axios.get(
      `http://localhost:3000/api/v1/action/${action}`,{
      headers: { Authorization: localStorage.getItem('token')},
      params: {q:params},
    }).then((response)=>{
      debugger
      return {
        type: action.toUpperCase(),
        payload: response.data
      }
    })
}
