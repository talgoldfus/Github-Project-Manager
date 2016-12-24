const projectReducer = function(state = {
    allUserProjects:{},
    accessLevel: "" ,
    collaborators: [],
    project_info: {},
    recentUserProjects:[]
}, action) {

    switch (action.type) {
        case 'GET_PROJECT':
            let project = action.payload
            return {
                ...state,
                accessLevel: project.accessLevel,
                collaborators: project.collaborators,
                project_info: project.project_info
            };
        case 'ALL_USER_PROJECTS':
           return {
             ...state,
             allUserProjects:{
               manager: action.payload.manager,
               collaborator: action.payload.collaborator
             }
           }
       case 'RECENT_USER_PROJECTS':
          return {
            ...state,
            recentUserProjects: action.payload
          }
        default:
            return state;
    }
}



export default projectReducer;
