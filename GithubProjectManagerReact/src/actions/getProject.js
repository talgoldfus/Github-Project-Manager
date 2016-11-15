import axios from 'axios'

const getProject = (id) => {
  return axios({
    url: `http://localhost:3000/api/v1/projects/${id}`,
    method:'get',
    headers: { Authorization: localStorage.getItem('token')},
    data: {id}
  }).then((response)=>{
      debugger

    })
  }


export default getProject
