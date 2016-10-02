const authReducer =  function(state = {authenticated: false, error: ''}, action){
  
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