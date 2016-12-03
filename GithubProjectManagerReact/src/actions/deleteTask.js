import axios from 'axios'

function deleteTask(taskId){
    return axios({
        url: `http://localhost:3000/api/v1/tasks/${taskId}`,
        method: 'delete',
        headers: { Authorization: localStorage.getItem('token') },
    }).then((response)=>{

    return{
      type: 'DELETE_TASK',
      payload: taskId
    }
  })
}


export default deleteTask
