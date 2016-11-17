import axios from 'axios'
import loginUser from './loginUser'
import {redirectToHome} from '../helpers/errorHandlers'

function signupUserAction(formProps, dispatch) {
    axios.post('http://localhost:3000/api/v1/users', {
        signup: {
            username: localStorage.username,
            password: formProps.password,
            password_confirmation: formProps.passwordConfirmation,
            temp_token: localStorage.temp_token
        }
    }).then((response) => {
            localStorage.removeItem('temp_token')
            loginUser(formProps, dispatch)
        },
        redirectToHome
    )
}


export default signupUserAction
