import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import updateTask from '../../actions/updateTask'
import {TextField , Slider , RadioButtonGroup } from 'redux-form-material-ui'
import { RadioButton } from 'material-ui/RadioButton'

const validate = values => {
  const errors = {}
  const requiredFields =[ 'title','priority','description','content','status']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required field'
    }
  })
  return errors
}

function submit(values,dispatch){
  dispatch(updateTask(values))
}


const TaskForm = props => {
  debugger
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <h2>Task Title</h2>
        </div>
        <div>
          <Field name="title" component={TextField} label="Task Title"/>
        </div>
        <div>
          <h2>Task Status</h2>
        </div>
        <div>
          <Field name="status" component={RadioButtonGroup} defaultSelected={props.initialValues.status} >
            <RadioButton value="todo" label='Todo'/>
            <RadioButton value="inProgress" label='In Progress'/>
            <RadioButton value="inReview" label='In Review'/>
            <RadioButton value="completed" label='Completed'/>
          </Field>
        </div>
        <div>
          <h2>
            <span>{`Priority: ${props.taskPriority}`}</span>
          </h2>
          <Field
           name="priority"
           component={Slider}
           min={1}
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
  validate,
  onSubmit: submit
})(TaskForm)

const connectedForm = connect(
  state => ({
    taskPriority: state.form["EditTaskForm"] ? state.form["EditTaskForm"].values.priority : null
  }),null)(form)


export default connectedForm
