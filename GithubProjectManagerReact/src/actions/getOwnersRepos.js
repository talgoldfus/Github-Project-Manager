import axios from 'axios'

export default function getOwnersRepos() {
    axios.get(
      'http://localhost:3000/api/v1/action/get_owner_repos',{
      headers: { Authorization: localStorage.getItem('token')},
    }).then((response)=>{

      return {
        type:'GET_OWNERS_REPOS',
        payload: response
      }
    })
}
