import React from 'react';
import {connect} from 'react-redux'
import ConnectGithubButton from '../components/ConnectGithubButton'
import completedStep from '../actions/completedStep'

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

const ConnectGithubButtonContainer = connect(mapStateToProps,{completedStep})(GithubButtonContainer)
export default ConnectGithubButtonContainer
