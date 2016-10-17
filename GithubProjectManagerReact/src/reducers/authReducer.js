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
      return response.data.status === 'Valid' ? true : false
      })
    .catch( error => {return false} )
  }else{
    return false
  }
}

const authReducer =  function(state = {authenticated: loggedInWithToken() , error: ''}, action){

  switch(action.type){
    case 'LOG_IN':
      return {authenticated: action.payload, error: ''};
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}



export default authReducer;
