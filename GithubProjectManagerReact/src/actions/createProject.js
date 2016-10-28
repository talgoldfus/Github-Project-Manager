import axios from 'axios'
import { batchActions } from 'redux-batched-actions';
import { browserHistory } from 'react-router'

const createProjectAction = (porjectId) => {
  return axios({
    url: "http://localhost:3000/api/v1/projects",
    method:'post',
    headers: { Authorization: localStorage.getItem('token')},
    data: {project: porjectId }
    }
  ).then((response)=>{
          browserHistory.push('/')
          return batchActions(
            [{type: '', payload: false},
            {type: '', payload: false}])
    })
  }


export default createProjectAction
