import axios from 'axios'

const logoutAction = () => {
  return axios({
    url: "http://localhost:3000/logout",
    method:'post',
    headers: { Authorization: localStorage.getItem('token')},
    data: {status: 'Logout' }
    }
  ).then((response)=>{
          localStorage.clear()
          return {type: 'LOG_IN', payload: false}
    })
  }


export default logoutAction
