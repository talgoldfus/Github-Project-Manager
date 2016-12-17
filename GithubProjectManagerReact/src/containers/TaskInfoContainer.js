import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';
import { submit } from 'redux-form'
import TaskInfo from '../components/TaskInfo';
import TaskFullContainer from './TaskFullContainer';
import editingTask from '../actions/editingTask'
import deleteTask from '../actions/deleteTask'
import updateTask from '../actions/updateTask'

class TaskInfoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        open: false,
      };
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCloseWhileEditing = this.handleCloseWhileEditing.bind(this)
    this.renderEditorialOptions = this.renderEditorialOptions.bind(this)
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleCloseWhileEditing(){
    this.setState({open: false})
    this.props.editingTask(false)
  }

  handleSave() {
  const submitForm = new Promise(resolve => {
            resolve(
                this.props.submit('EditTaskForm')
            )
        })

  submitForm.then(
          () => { this.props.editingTask(false)}
      )
  }

  handleDelete() {
    if (window.confirm("Are you sure you want to delete this Task? Once confirmed the process is irreversible")) {
      this.props.deleteTask(this.props.id)
    }
  }


  renderEditorialOptions() {
    const {dispatch} = this.props
    const task = this.props.task.byId.find(task=> task.id === this.props.id)

    if(this.props.accessLevel === 'manager'){
      if (this.props.editing){
        return[
          <FlatButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={()=>this.handleSave(dispatch)}
          />,
          <FlatButton
            label="Close"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleCloseWhileEditing}
          />,

        ]
      }
      else{
        return [
          <FlatButton
            label="DELETE TASK"
            labelPosition="after"
            secondary={true}
            style={ {float: "left"} }
            icon={<FontIcon className="fa fa-trash" />}
            onTouchTap={this.handleDelete}
          />,
          <FlatButton
            label="EDIT"
            labelPosition="after"
            primary={true}
            style={ {float: "left"} }
            icon={<FontIcon className="fa fa-pencil" />}
            onTouchTap={()=> this.props.editingTask(true)}
          />,
          <FlatButton
            label="Close"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
          />
        ]
      }
    }
    else{
      if (task.assignees.find(user => user.username === this.props.user)){
        let actions = [
          <FlatButton
          label="Close"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
          />
        ]

        let serializedAssignees = task.assignees.map(user => {
          return {
            user: user.username
          }})

        task.status === "todo" ? actions.unshift(
          <FlatButton
          label="Change Task Status To In-Progress"
          labelPosition="after"
          primary={true}
          style={ {float: "left"} }
          icon={<FontIcon className="fa fa-spinner" />}
          onTouchTap={()=> this.props.updateTask({...task, assignees:serializedAssignees , status:"inProgress"})}
          />
        ) : null

        task.status === "inProgress" ? actions.unshift(
          <FlatButton
          label="Submit Task For Review"
          labelPosition="after"
          primary={true}
          style={ {float: "left"} }
          icon={<FontIcon className="fa fa-check-square-o" />}
          onTouchTap={()=> this.props.updateTask({...task, assignees:serializedAssignees , status:"inReview"})}
          />
        ) : null
        return actions
      }
      else{
        return(
          <FlatButton
          label="Close"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
          />
        )
      }
    }
  }

  render() {
    const actions = this.renderEditorialOptions()
    return(
      <div onTouchTap={this.handleOpen}>

        <TaskInfo
          status={this.props.status}
          title={this.props.title}
          labels={this.props.labels}
          priority={this.props.priority}
        />

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <TaskFullContainer id={this.props.id} />
        </Dialog>
      </div>
    )
  }
};



function mapStateToProps(state) {
  return {
    accessLevel: state.project.accessLevel,
    editing: state.tasks.editing,
    task: state.tasks,
    user: state.authentication.user
  }
}

const ConnectedTaskInfoContainer = connect(mapStateToProps,{
  deleteTask,
  editingTask,
  updateTask,
  submit})(TaskInfoContainer)


export default ConnectedTaskInfoContainer;
