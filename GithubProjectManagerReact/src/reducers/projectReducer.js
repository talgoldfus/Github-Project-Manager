const projectReducer =  function(state = {
  project:{},
  tasks:[],
  manager:{},
  assignees:[]
}, action){

    switch(action.type){
    case '':
      // return {...state, repoSearchResults: action.payload };
    default:
      return state;
  }
}



export default projectReducer;
