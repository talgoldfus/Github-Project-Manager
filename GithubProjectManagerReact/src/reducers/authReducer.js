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

      return {
        authenticated: response.data.status === 'Valid' ? true : false ,
        connected: response.data.connected ,
        error: ''}
      })
    .catch( error => {return false} )
  }else{
    return false
  }
}

const authReducer =  function(state = loggedInWithToken(), action){
  switch(action.type){
    case 'LOG_IN':
      return {...state, authenticated: action.payload }
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    case 'GH_CONNECTED':
        return {...state,connected: action.payload};
    default:
      return state;
  }
}



export default authReducer;
