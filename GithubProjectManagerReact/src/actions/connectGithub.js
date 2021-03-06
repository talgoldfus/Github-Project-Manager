import axios from 'axios'
import { browserHistory } from 'react-router'
import {redirectToHome} from '../helpers/errorHandlers'

const connectGithubAction = (ghCode) => {
    return axios({
            url: "http://localhost:3000/api/v1/github-callback",
            method: 'post',
            data: {code: ghCode}
        })
        .then((response) => {
            localStorage.setItem('username', response.data.username)
            if (response.data.existing_user) {
                browserHistory.push('/signin')
                return {
                    type: 'GH_CONNECTED',
                    payload: true
                }
            } else {
                browserHistory.push('/signup')
                return {
                    type: 'GH_CONNECTED',
                    payload: true
                }
            }
        })
        .catch(error => {
            redirectToHome()
            return {
                type: 'GH_CONNECTED',
                payload: false
            }
        })
}

export default connectGithubAction
