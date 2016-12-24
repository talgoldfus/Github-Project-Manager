import axios from 'axios'

const getRecentUserProjects = (amount) => {
    return axios({
        url: `http://localhost:3000/api/v1/projects?recent=${amount}`,
        method: 'get',
        headers: { Authorization: localStorage.getItem('token') },
    }).then((response) => {
      var projects  = response.data.data.map(project => {
        return Object.assign({id: parseInt(project.id) }, project.attributes)
      })

        return {
            type: 'RECENT_USER_PROJECTS',
            payload: projects
        }
    })
}


export default getRecentUserProjects
