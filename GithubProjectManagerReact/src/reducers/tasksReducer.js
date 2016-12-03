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
                      let updatedTask  = action.payload ;
                        return {
                          ...task,
                          ...updatedTask
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
        case 'DELETE_TASK':
            let tasks= state.byId.filter(task => task.id !== action.payload )
            let ids= state.allIds.filter(id =>  id !== action.payload )

            return {
              ...state,
              byId: tasks,
              allIds: ids
            }

        default:
            return state;
    }
}

export default tasksReducer;
