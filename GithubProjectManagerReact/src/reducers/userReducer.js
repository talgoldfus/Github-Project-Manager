const userReducer =  function(state = {}, action){

  switch(action.type){
    case 'GET_USER_DETAILS':
      return action.payload
    case 'LOG_OUT_USER':
        return {}
    default:
      return state;
  }
}



export default userReducer;
