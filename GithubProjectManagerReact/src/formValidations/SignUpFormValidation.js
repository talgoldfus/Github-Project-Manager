import axios from 'axios'

const SignUpFormValidation = (values) => {
  return axios.post("http://localhost:3000/api/v1/users",{
    vallidation: {username: values.username}
  }).then((response) => {
    if (response.data.status === "failed" ){
      throw { username: 'Username already Exists' }
    }
  })
}

export default SignUpFormValidation
