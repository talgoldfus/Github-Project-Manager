import axios from 'axios'
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'
import { batchActions } from 'redux-batched-actions';

export default function loginUserAction(formProps, dispatch) {
    return axios.post("http://localhost:3000/auth_user", {
        username: localStorage.username,
        password: `${formProps.password}`
    }).then((response) => {
        if (response.data.auth_token) {
            localStorage.setItem('token', response.data.auth_token)
            let user = response.data.user

            dispatch(batchActions([{
                type: 'LOGGED_IN',
                payload: true
            }, {
                type: 'GET_USER_DETAILS',
                payload: {
                  username: user.username,
                  profile_picture: user.profile_picture ,
                  id: user.id
                }
            }]))
            browserHistory.push('/home')
        }
    }).catch((error) => {
        if (error.response.status === 500) {
            throw new SubmissionError({
                password: 'Invalid Username'
            })
        } else {
            throw new SubmissionError({
                password: 'Invalid Password'
            })
        }
    })
}
