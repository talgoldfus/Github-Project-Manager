import axios from 'axios'

export default function getPublicProjects() {
    const url = 'https://project-manager-api.herokuapp.com/api/v1/projects?public=true'
    const request = axios.get(url)
  return {
    type:'GET_PUBLIC_PROJECTS',
    payload: request
  }
}
