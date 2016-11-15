import axios from 'axios'
import loginUser from './loginUser'


function signupUserAction(formProps,dispatch) {
   axios.post('http://localhost:3000/api/v1/users',{
        signup:{
                username: localStorage.username,
                password: formProps.password,
                password_confirmation: formProps.passwordConfirmation,
                temp_token: localStorage.temp_token
              }
     }
   ).then((response)=>{
      localStorage.removeItem('temp_token')
      loginUser(formProps,dispatch)
   })
 }


export default signupUserAction
