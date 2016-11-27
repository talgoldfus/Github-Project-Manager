import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField , Slider} from 'redux-form-material-ui'
import { connect } from 'react-redux'
import updateTask from '../../actions/updateTask'


const validate = values => {
  const errors = {}
  const requiredFields = [ 'title','priority','description','content']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  return errors
}

const handleSubmit=(values,dispatch)=>{dispatch(updateTask(values))}


const EditTask = props => {
    const {pristine,submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Task Title</h2>
        </div>
        <div>
          <Field name="title" component={TextField} label="Task Title"/>
        </div>
        <div>
          <h2>
            <span>{`Priority: ${props.taskPriority}`}</span>
          </h2>
          <Field
           name="priority"
           component={Slider}
           defaultValue={props.initialValues.priority}
           min={0}
           max={10}
           step={1}
          />
       </div>
       <div>
         <h2>Short Description</h2>
       </div>
        <div>
          <Field name="description" component={TextField} label="Short Description"/>
        </div>
        <div>
          <h2>Task Content</h2>
        </div>
        <div>
          <Field
            name="content"
            component={TextField}
            multiLine={true}
            fullWidth={true}
            label="Task Content"
          />
        </div>
      </form>
    )
}



const form = reduxForm({
  form: 'EditTaskForm',
  validate
})(EditTask)

const connectedForm = connect(
  state => ({
    taskPriority: state.form["EditTaskForm"] ? state.form["EditTaskForm"].values.priority : null
  }),null)(form)


export default connectedForm
