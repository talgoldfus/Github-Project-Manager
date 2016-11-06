import axios from 'axios'
import { batchActions } from 'redux-batched-actions';
import { browserHistory } from 'react-router'

const findOrCreateProject = (repoId,name) => {
  return axios({
    url: "http://localhost:3000/api/v1/projects",
    method:'post',
    headers: { Authorization: localStorage.getItem('token')},
    data: {
            id: repoId,
            title: name
          }
    }
  ).then((response)=>{
          browserHistory.push('/')
          return batchActions(
            [{type: '', payload: false},
            {type: '', payload: false}])
    })
  }


export default findOrCreateProject
