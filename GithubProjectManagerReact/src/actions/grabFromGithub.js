import axios from 'axios'

export default function grabFromGithubAction(action, params = null) {
    return axios.get(
        `http://localhost:3000/api/v1/action/${action}`, {
            headers: {Authorization: localStorage.getItem('token')},
            params: {q: params},
        }).then((response) => {
        return {
            type: action.toUpperCase(),
            payload: response.data
        }
    })
}
