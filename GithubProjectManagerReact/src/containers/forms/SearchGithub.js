import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import grabFromGithub from '../../actions/grabFromGithub'
import completedStep from '../../actions/completedStep'

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

  const { handleSubmit,submitting,dispatch } = props

  let submitSearch = function (input){
        dispatch(grabFromGithub('search_owner_repos',input.search))
      .then(()=>{
        dispatch(completedStep(true))
      })
    }

  return (
    <form onSubmit={handleSubmit(submitSearch)}>
      <div>
        <Field name="search" component={renderTextField} label="search"/>
      </div>
    </form>
  )
}


const form = reduxForm({
  form: 'SearchGithub',
  validate
})(SearchGithub)

export default form;
