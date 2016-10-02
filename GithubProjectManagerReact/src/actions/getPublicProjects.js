import axios from 'axios'

export default function getPublicProjects() {
    const url = 'http://localhost:3000/api/v1/projects?public=true'
    const request = axios.get(url)
  return {
    type:'GET_PUBLIC_PROJECTS',
    payload: request
  }
}
