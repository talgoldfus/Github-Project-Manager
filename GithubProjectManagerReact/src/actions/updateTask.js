import axios from 'axios'

function updateTask(task){
    return axios({
        url: `http://localhost:3000/api/v1/tasks/${task.id}`,
        method: 'patch',
        headers: { Authorization: localStorage.getItem('token') },
        data: {
          update_task: {...task}
      }
    }).then((response)=>{
      let taskData = response.data.data
       let updatedTask = Object.assign({id: parseInt(taskData.id) }, taskData.attributes)

    return{
      type: 'UPDATE_TASK',
      payload: updatedTask
    }
  })
}


export default updateTask
