import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import signup from '../../actions/signup'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'password','passwordConfirmation']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.password && values.password.length<8) {
    errors.password = 'Password must be atleast 8 characters long'
  }
  else if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password must match the password confirmation'
  }
  return errors
}

const SignupForm = props => {
  const {  handleSubmit,pristine,submitting,dispatch } = props
  return (
    <form onSubmit={handleSubmit(info=>signup(info,dispatch))}>
      <div>
        <h2>username: {localStorage.username}</h2>
      </div>
      <div>
        <Field name="password" component={TextField} label="Password"/>
      </div>
      <div>
        <Field name="passwordConfirmation" component={TextField} label="Password Confirmation"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

const form = reduxForm({
  form: 'SignupForm',
  validate
}
)(SignupForm)

export default form;
