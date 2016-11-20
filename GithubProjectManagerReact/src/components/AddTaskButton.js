import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class AddTaskButton extends Component {

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
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
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
      </div>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
        >
        </Dialog>
      </div>
    )
  }
};

export default AddTaskButton;
