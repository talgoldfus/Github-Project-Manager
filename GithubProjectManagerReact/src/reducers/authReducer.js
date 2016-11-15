const authReducer =  function(state = {}, action){
  switch(action.type){
    case 'LOGGED_IN':
      return {...state, authenticated: action.payload };
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    case 'GH_CONNECTED':
        return {...state, connected: action.payload};
    default:
      return state;
  }
}



export default authReducer;
