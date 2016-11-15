import axios from 'axios'
import { batchActions } from 'redux-batched-actions';

const logoutActionAction = () => {
  return axios({
    url: "http://localhost:3000/logout",
    method:'post',
    headers: { Authorization: localStorage.getItem('token')},
    data: {status: 'Logout' }
    }
  ).then((response)=>{
          localStorage.clear()
          return batchActions(
            [{type: 'LOGGED_IN', payload: false},
            {type: 'GH_CONNECTED', payload: false}])
    })
  }


export default logoutActionAction
