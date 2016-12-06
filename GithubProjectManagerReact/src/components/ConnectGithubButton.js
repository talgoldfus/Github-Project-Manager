import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class ConnectGithubButton extends Component {
  render(){
    return (
            <RaisedButton
               label="Connect to Github"
               href="https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=da38e23dc07bda458819"
               secondary={true}
               disabled={this.props.connected}
               icon={<FontIcon className="fa fa-github" />}
            />
          )
  }
}

export default ConnectGithubButton
