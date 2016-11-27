const tasksReducer = function(state = {
        byId: [],
        allIds: [],
        editing: false
    },
    action) {

    switch (action.type) {
        case 'GET_TASKS':
        debugger
            return {
                byId: action.payload.byId,
                allIds: action.payload.allIds,
                editing: false
            };
        default:
            return state;
    }
}

export default tasksReducer;
