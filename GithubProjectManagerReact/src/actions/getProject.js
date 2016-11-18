import axios from 'axios'
import { browserHistory } from 'react-router'
import {redirectToHome} from '../helpers/errorHandlers'

const getProject = (id) => {
  return axios({
    url: `http://localhost:3000/api/v1/projects/${id}`,
    method:'get',
    headers: { Authorization: localStorage.getItem('token')},
    data: {id}
  }).then((response)=>{
      let project =  response.data.data.attributes
      let tasks  = response.data.included.map(task=>{
        return Object.assign({id: parseInt(task.id) }, task.attributes)
      })
      return {
        type:'GET_PROJECT',
        payload:{
          project_info: {title: project.title , repoId: project.repoId },
          tasks: tasks,
          accessLevel: project.access_level,
          collaborators: project.collaborators
        }
      }
    },
    redirectToHome
  )
  }


export default getProject
