import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import grabFromGithub from '../../actions/grabFromGithub'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'search']
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



const SearchGithub = props => {
  const { handleSubmit,pristine,submitting,dispatch } = props
  return (
    <form onSubmit={handleSubmit(input => {
        dispatch(grabFromGithub('search_owner_repos',input.search))
      })
    }>
      <div>
        <Field name="search" component={renderTextField} label="search"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Search</button>
      </div>
    </form>
  )
}


const form = reduxForm({
  form: 'SearchGithub',
  validate
})(SearchGithub)

export default form;
