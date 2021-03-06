import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
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

const SearchGithub = props => {

  const { handleSubmit,submitting,pristine,dispatch } = props

  let submitSearch = function (input){
        dispatch(grabFromGithub('search_owner_repos',input.search))
      .then((response)=>{
        if(Array.isArray(response.payload)){
          dispatch(completedStep(true))
          props.nextStep()
        }
        else{
         alert("No matching results. Please try again.")
        }
      })
    }

  return (
    <form onSubmit={handleSubmit(submitSearch)}>
      <div>
        <Field name="search" component={TextField} label="search"/>
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
