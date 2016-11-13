import React,{Component} from 'react';
import TaskInfo from '../components/TaskInfo';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class TaskContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
        open: false,
      };
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };


  render(){

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return(
      <div onTouchTap={this.handleOpen.bind(this)}>

        <TaskInfo
          status={this.props.status}
          title={this.props.title}
          labels={this.props.labels}
          priority={this.props.priority}
        />

        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Full Task Component
        </Dialog>
      </div>
    )
  }
};

export default TaskContainer;
