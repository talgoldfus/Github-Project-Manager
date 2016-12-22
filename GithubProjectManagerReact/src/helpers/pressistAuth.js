import axios from 'axios'

const loggedInWithToken = ()=>{

  if(localStorage.token){
    return axios({
      url: "http://localhost:3000/auth_token",
      method:'post',
      headers: { Authorization: localStorage.getItem('token')},
      data: {status: 'Check token validation' }
      }
    )
    .then((response)=>{
      return{
        authentication: {
          authenticated: response.data.status === 'Valid' ? true : false ,
          connected: response.data.connected ,
          error: ''
        } ,
        user: response.data.user
      }
    }, error => {
      return {
        authentication: {
          authenticated: null,
          connected: null,
          error: error
        }
      }
    })
  }
  else{
      return new Promise(resolve => {
        resolve({
          authenticated: null,
          connected: null ,
          error: null });
        });
  }
}

export default loggedInWithToken;
