import axios from 'axios'
import { batchActions } from 'redux-batched-actions';
import {browserHistory} from 'react-router'

const logoutActionAction = () => {
  return axios({
    url: "http://localhost:3000/logout",
    method:'post',
    headers: { Authorization: localStorage.getItem('token')},
    data: {status: 'Logout' }
    }
  ).then((response)=>{
          localStorage.clear()
          browserHistory.push('/')
          return batchActions(
            [{type: 'LOGGED_IN', payload: false },
            {type: 'LOGOUT_USER', payload: null },
            {type: 'GH_CONNECTED', payload: false}])
    })
  }


export default logoutActionAction
