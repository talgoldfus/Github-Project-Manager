const projectsReducer =  function(state = {projects:[]}, action){
  
  switch(action.type){
    case 'GET_PUBLIC_PROJECTS':
      return {projects: action.payload};
    default:
      return state;
  }
}

export default projectsReducer;
