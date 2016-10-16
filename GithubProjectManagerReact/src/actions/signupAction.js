import axios from 'axios'
import loginUser from './loginUser'


function signupUser(formProps,dispatch) {
   axios.post('http://localhost:3000/api/v1/users',{
        signup:{name: formProps.name,
                username: formProps.username,
                password: formProps.password,
                password_confirmation: formProps.passwordConfirmation
              }
     }
   ).then((response)=>{
      dispatch(loginUser(formProps))
   })
 }


export default signupUser
