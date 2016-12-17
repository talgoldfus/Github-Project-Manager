import React  from 'react';
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import completedStep from '../actions/completedStep'


const ConnectGithubButton = props => {
    return (
            <RaisedButton
               label="Connect to Github"
               href="https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=da38e23dc07bda458819"
               secondary={true}
               disabled={props.connected}
               icon={<FontIcon className="fa fa-github" />}
            />
          )
}


const GithubButtonContainer = (props)=> {
  let currentlyConnected = props.loggedIn && props.connectedToGithub
  currentlyConnected ? props.completedStep(true) : null ;
  return <ConnectGithubButton connected={currentlyConnected}/>
}

function mapStateToProps(state){
    return {
      connectedToGithub: state.authentication.connected,
      loggedIn:state.authentication.authenticated
   }
}

export default connect(mapStateToProps,{completedStep})(GithubButtonContainer)
