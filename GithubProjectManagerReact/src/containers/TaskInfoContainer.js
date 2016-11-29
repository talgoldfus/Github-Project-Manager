import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';
import { submit } from 'redux-form'
import TaskInfo from '../components/TaskInfo';
import TaskFullContainer from './TaskFullContainer';
import editingTask from '../actions/editingTask'

class TaskInfoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        open: false,
      };
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCloseWhileEditing = this.handleCloseWhileEditing.bind(this)
    this.renderEditorialOptions = this.renderEditorialOptions.bind(this)
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleCloseWhileEditing(dispatch){
    this.setState({open: false})
    dispatch(editingTask(false))
  }

  handleSave(dispatch) {
  const submitForm = new Promise(resolve => {
            resolve(
                dispatch(submit('EditTaskForm'))
            )
        })

  submitForm.then(
          () => { dispatch(editingTask(false))}
      )
  }

  renderEditorialOptions() {
    const {dispatch} = this.props

    if(this.props.accessLevel === 'manager'){
      if (this.props.editing){
        return[
          <FlatButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={()=>this.handleSave(dispatch) }
          />,
          <FlatButton
            label="Close"
            primary={true}
            keyboardFocused={true}
            onTouchTap={()=>this.handleCloseWhileEditing(dispatch)}
          />,

        ]
      }
      else{
        return [
          <FlatButton
            label="EDIT"
            labelPosition="before"
            primary={true}
            icon={<FontIcon className="fa fa-pencil" />}
            onTouchTap={()=> dispatch(editingTask(true))}
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
    editing: state.tasks.editing
  }
}

const ConnectedTaskInfoContainer = connect(mapStateToProps)(TaskInfoContainer)


export default ConnectedTaskInfoContainer;
