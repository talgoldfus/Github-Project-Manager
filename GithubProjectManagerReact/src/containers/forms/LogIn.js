import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import loginUser from '../../actions/loginUser'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'password']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  return errors
}

const LogInForm = props => {
  const { handleSubmit,pristine,submitting,dispatch } = props
  return (
    <form onSubmit={handleSubmit(info=>loginUser(info,dispatch))}>
      <div>
        <h2>username: {localStorage.username}</h2>
      </div>
      <div>
        <Field name="password" component={TextField} label="Password"/>
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
