import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import asyncValidate from '../../formValidations/SignUpFormValidation'
import signupAction from '../../actions/signupAction'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'username','password','passwordConfirmation']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.username && values.username.length<8) {
    errors.username = 'Username must be atleast 8 characters long'
  }
  else if (values.password && values.password.length<8) {
    errors.password = 'Password must be atleast 8 characters long'
  }
  else if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password must match the password confirmation'
  }
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



const SignInForm = props => {
  const {  handleSubmit,pristine,submitting,dispatch } = props
  return (
    <form onSubmit={handleSubmit(info=>signupAction(info,dispatch))}>
      <div>
        <Field name="name" component={renderTextField} label="Name"/>
      </div>
      <div>
        <Field name="username" component={renderTextField} label="Username"/>
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password"/>
      </div>
      <div>
        <Field name="passwordConfirmation" component={renderTextField} label="Password Confirmation"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}


const form = reduxForm({
  form: 'SignInForm',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'username' ]
}
)(SignInForm)

export default form;
