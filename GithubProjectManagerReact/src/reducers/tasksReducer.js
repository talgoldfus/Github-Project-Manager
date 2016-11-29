const tasksReducer = function(state = {
        byId: [],
        allIds: [],
        editing: false
    },
    action) {

    switch (action.type) {
        case 'GET_TASKS':
            return {
                byId: action.payload.byId,
                allIds: action.payload.allIds,
                editing: false
            };
        case 'EDITING_TASK':
            return {
                ...state,
                editing: action.payload
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                byId: state.byId.map(task => {
                    if (task.id === action.payload.id) {
                        return {...task,
                            title: action.payload.title,
                            content: action.payload.content,
                            description: action.payload.description,
                            priority: action.payload.priority,
                            status: action.payload.status
                        }
                    } else {
                        return task
                    }
                })
            }
        case 'NEW_TASK':
            return {
                byId: [...state.byId, action.payload],
                allIds: [...state.allIds, action.payload.id],
                editing: false
            }

        default:
            return state;
    }
}

export default tasksReducer;
