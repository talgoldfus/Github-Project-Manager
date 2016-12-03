import React from 'react'
import { Field, reduxForm , FieldArray , formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import newTask from '../../actions/newTask'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {TextField , Slider , SelectField} from 'redux-form-material-ui'

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

function submit(values,dispatch,props){
  dispatch(newTask(values,props.repoId))
}



const TaskForm = props => {

  const renderMenuItem = (user,disable) => {
    return (
      <MenuItem
        key={user.username}
        value={user.username}
        primaryText={user.username}
        disabled={disable}
      />
     )
  }

    if (props.collaborators){
      var assignees = props.collaborators.map(user => {
        if (props.assignedUsers){
          let alreadySelected = props.assignedUsers.find(assignee => assignee.user === user.username)
          return alreadySelected ? renderMenuItem(user,true) : renderMenuItem(user,false)
        }
        return renderMenuItem(user,false)
      })
    }
    else {
      assignees =  <MenuItem value="N/A" primaryText="There are no collaborators for this project"/>
    }


    const renderAssignees = ({ fields }) => (
      <ul>
        <li>
          <RaisedButton
            label="Assign a collaborator to this task"
            labelPosition="after"
            primary={true}
            onTouchTap={() => fields.push({})}
            icon={<ContentAdd />}
            disabled={ (fields.length === assignees.length ) && props.collaborators ? true : false }
          />
        </li>
        {fields.map((assignee, index) =>
          <li key={index}>
              <IconButton
                onTouchTap={() => fields.remove(index)}
                tooltip="Remove assignee"
              >
                <ContentRemove />
              </IconButton>
              <Field
                name={`${assignee}.user`}
                component={SelectField}
                >
                {assignees}
              </Field>
          </li>
        )}
      </ul>
    )

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
            label="Task Content"
          />
        </div>
        <div>
          <h2>Asignees</h2>
        </div>
        <div>
          <FieldArray
            name="assignees"
            component={renderAssignees}
          />
        </div>
      </form>
    )
}

const form = reduxForm({
  form: 'NewTaskForm',
  validate,
  onSubmit: submit
})(TaskForm)

const priority = function(state){
  if (state.form["NewTaskForm"]){
    return state.form["NewTaskForm"].values ? state.form["NewTaskForm"].values.priority : 1
  }
  else {
    return 1
  }
}

const formValues = formValueSelector('NewTaskForm')

const  mapStateToProps = function(state){
    return ({
      taskPriority: priority(state),
      assignedUsers: formValues(state, 'assignees'),
      collaborators : state.project.collaborators,
      repoId: state.project.project_info.repoId
    })
}

const connectedForm = connect(mapStateToProps, null)(form)


export default connectedForm
