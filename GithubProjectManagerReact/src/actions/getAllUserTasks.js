import axios from 'axios'

const getAllUserTasks = () => {
    return axios({
        url: 'http://localhost:3000/api/v1/tasks/',
        method: 'get',
        headers: { Authorization: localStorage.getItem('token') },
    }).then((response) => {
        var tasks  = response.data.data.map(task => {
           return Object.assign(
               {id: parseInt(task.id) },
               {description: task.attributes.description,
                priority: task.attributes.priority,
                status: task.attributes.status ,
                title: task.attributes.title,
                project:{id: task.attributes.project.id ,title:task.attributes.project.title }
               }
           )
         })

        return {
            type: 'ALL_USER_TASKS',
            payload: tasks
        }
    })
}


export default getAllUserTasks
