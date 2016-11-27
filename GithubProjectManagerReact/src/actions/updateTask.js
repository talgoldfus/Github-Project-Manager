import axios from 'axios'

function updateTask(task){
    return axios({
        url: `http://localhost:3000/api/v1/tasks/${task.id}`,
        method: 'patch',
        headers: { Authorization: localStorage.getItem('token') },
        data: {
          update_task: {
          ...task,
          title: task.title,
          content: task.content,
          description: task.description,
          priority: task.priority,
          status: task.status
        }
      }
    }).then(()=>{
    return{
      type: 'UPDATE_TASK',
      payload: task
    }
  })
}


export default updateTask
