import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import ConnectGithubButton from './ConnectGithubButton';
import LogInForm from  './forms/LogIn'

const LoginPage = props => {

    const actions =
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={false}
        onTouchTap={()=>browserHistory.push('/')}
      />

    return(
        <Dialog
          modal={true}
          actions={actions}
          open={true}
        >
          {props.connected ? <LogInForm /> : <ConnectGithubButton /> }
        </Dialog>
    )
};



function mapStateToProps(state) {
  return {
    connected: state.authentication.connected
  }
}


export default connect(mapStateToProps)(LoginPage)
