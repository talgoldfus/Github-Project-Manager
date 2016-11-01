const githubProjectReducer =  function(state = {
  repoSearchResults:[],
  currentRepo:[],
  stepCompleted:false}, action){

    switch(action.type){
    case 'SEARCH_OWNER_REPOS':
      return {...state, repoSearchResults: action.payload };
    case 'CURRENTLY_SELECTED_REPO':
      return {...state, currentRepo: action.payload };
    case 'COMPLETED_STEP':
      return {...state, stepCompleted: action.payload };
    default:
      return state;
  }
}



export default githubProjectReducer;
