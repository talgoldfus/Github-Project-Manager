import axios from 'axios'

const getAllUserProjects = () => {
    return axios({
        url: 'http://localhost:3000/api/v1/projects/',
        method: 'get',
        headers: { Authorization: localStorage.getItem('token') },
    }).then((response) => {
        let userProjects = response.data

        return {
            type: 'ALL_USER_PROJECTS',
            payload: {
                manager: userProjects.manager,
                collaborator: userProjects.collaborator
            }
        }
    })
}


export default getAllUserProjects
