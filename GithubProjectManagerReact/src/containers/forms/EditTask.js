import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import updateTask from '../../actions/updateTask'
import { SubmissionError } from 'redux-form'
import {TextField , Slider} from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields =[ 'title','priority','description','content']
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
    return (
      <form onSubmit={props.handleSubmit}>
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
  onSubmit: submit
})(TaskForm)

const connectedForm = connect(
  state => ({
    taskPriority: state.form["EditTaskForm"] ? state.form["EditTaskForm"].values.priority : null
  }),null)(form)


export default connectedForm
