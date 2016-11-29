import axios from 'axios'

function newTask(task,project_id){
    return axios({
        url: 'http://localhost:3000/api/v1/tasks',
        method: 'post',
        headers: { Authorization: localStorage.getItem('token') },
        data: {
          new_task: {
          ...task,
          title: task.title,
          content: task.content,
          description: task.description,
          priority: task.priority,
          status: task.status,
          project_id: project_id
        }
      }
    }).then((response)=>{
      let taskData = response.data.data
       task = Object.assign({id: parseInt(taskData.id) }, taskData.attributes)

    return{
      type: 'NEW_TASK',
      payload: task
    }
  })
}


export default newTask
