import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import NewTaskForm from './forms/NewTask'
import {connect} from 'react-redux';
import { submit } from 'redux-form'



class AddTaskButton extends Component {

  constructor(props){
    super(props)
    this.state = {
        open: false,
      };
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleSave = this.handleSave.bind(this)

  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  handleSave(dispatch) {
    dispatch(submit('NewTaskForm'))
    if(!this.props.form.NewTaskForm.syncErrors){
      this.setState({open: false});
    }
  }

  render(){
    const {dispatch} = this.props

    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=>this.handleSave(dispatch) }
      />,
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleClose}
      />

    ];

    return(

      <div>
        <FloatingActionButton
          secondary={true}
          onTouchTap={this.handleOpen.bind(this)}
          >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <NewTaskForm initialValues={{priority:5}} />
        </Dialog>
      </div>
    )
  }
};
function mapStateToProps(state){
  return {form: state.form}
}

export default connect(mapStateToProps,null)(AddTaskButton)
