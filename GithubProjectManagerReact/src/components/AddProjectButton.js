import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import GithubProjectSelector from '../containers/GithubProjectSelector'


class AddProjectButton extends Component {

  constructor(props){
    super(props)
    this.state = {
        open: false,
      };
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };


  render(){

    const actions =
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleClose}
      />


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
          <GithubProjectSelector/>
        </Dialog>
      </div>
    )
  }
};



export default AddProjectButton;
