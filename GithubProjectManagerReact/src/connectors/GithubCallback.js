import React, {Component} from 'react';
import NavBarMenu from '../components/NavBarMenu';
import {connect} from 'react-redux'
import connectGithub from '../actions/connectGithub'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';




class GithubCallback extends Component {

componentWillMount(){
  this.props.connectGithub(this.props.location.query.code)
}

render(){
  return (

      <MuiThemeProvider muiTheme={getMuiTheme()} >
        <div className="App">
              <NavBarMenu />
              <div>
                <h1>You were successfuly connected to Github</h1>
              </div>
        </div>
      </ MuiThemeProvider>
    )
}
}

const GithubCallbackConnector = connect(null,{connectGithub})(GithubCallback)
export default GithubCallbackConnector
