import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
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
        <h2>username: {localStorage.username}</h2>
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
