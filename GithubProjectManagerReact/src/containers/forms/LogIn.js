import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import loginUser from '../../actions/loginUser'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'username','password']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  // if (values.username && values.username.length<8) {
  //   errors.username = 'Username must be atleast 8 characters long'
  // }
  // else if (values.password && values.password.length<8) {
  //   errors.password = 'Password must be atleast 8 characters long'
  // }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
)



const LogInForm = props => {
  const { handleSubmit,pristine,submitting,dispatch } = props
  return (
    <form onSubmit={handleSubmit(info=>loginUser(info,dispatch))}>
      <div>
        <Field name="username" component={renderTextField} label="Username"/>
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}


const form = reduxForm({
  form: 'LogInForm',
  validate
})(LogInForm)

export default form;
