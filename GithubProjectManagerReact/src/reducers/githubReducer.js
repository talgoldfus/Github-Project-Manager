const githubReducer =  function(state = {}, action){

    switch(action.type){
    case 'SEARCH_OWNER_REPOS':
      return {...state, repoSearchResults: action.payload };
    case 'CURRENTLY_SELECTED':
      return {...state, currentRepo: action.payload };
    default:
      return state;
  }
}



export default githubReducer;
