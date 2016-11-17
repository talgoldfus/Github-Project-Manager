const projectReducer = function(state = {
    project_info: {},
    tasks: [],
    manager: {},
    collaborators: []
}, action) {

    switch (action.type) {
        case 'GET_PROJECT':
            let project = action.payload
            return {
                accessLevel: project.accessLevel,
                collaborators: project.collaborators,
                project_info: project.project_info,
                tasks: project.tasks
            };
        default:
            return state;
    }
}



export default projectReducer;
