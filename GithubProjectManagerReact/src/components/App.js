import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarMenu from './NavBarMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'

const connectGithub = ()=>{
   return axios({
      url: "http://localhost:3000/api/v1/github-connect",
      method:'post',
      headers: { Authorization: localStorage.getItem('token')},
      data: {redirect_uri:'http://localhost:3001/'}
   })
    .then((response)=>{debugger})
    .catch( error => {debugger} )
}


const connectGithub2 = ()=>{
   return axios({
      url: "https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=da38e23dc07bda458819",
      method:'get',
      data: {redirect_uri:'http://localhost:3001/'}
   })
    .then((response)=>{debugger})
    .catch( error => {debugger} )
}


class App extends Component {

componentWillMount(){
}

render(){
  return (

      <MuiThemeProvider muiTheme={getMuiTheme()} >
        <div className="App">
              <NavBarMenu />
              {this.props.children}
              <MenuItem primaryText="Connect Github" onTouchTap={()=>connectGithub()} />
              <a href='https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=da38e23dc07bda458819'>Connect Github Direct</a>
              <MenuItem primaryText="Connect Github 2" onTouchTap={()=>connectGithub2()} />

        </div>
      </ MuiThemeProvider>
    )
}
}

export default App;

//
