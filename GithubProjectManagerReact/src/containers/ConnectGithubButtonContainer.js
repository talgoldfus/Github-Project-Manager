import React from 'react';
import {connect} from 'react-redux'
import ConnectGithubButton from '../components/ConnectGithubButton'


const GithubButtonContainer = (props)=> {
  return  props.loggedIn && !props.connectedToGithub  ? <ConnectGithubButton />  : null 
}

function mapStateToProps(state){
    return {connectedToGithub: state.github.connected,
            loggedIn:state.authentication.authenticated}
}

const ConnectGithubButtonContainer = connect(mapStateToProps)(GithubButtonContainer)
export default ConnectGithubButtonContainer
