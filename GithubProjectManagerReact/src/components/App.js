import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarMenu from './NavBarMenu';
import ConnectGithubButton from '../containers/ConnectGithubButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends Component {

render(){
  return (

      <MuiThemeProvider muiTheme={getMuiTheme()} >
        <div className="App">
              <NavBarMenu />
              {this.props.children}
        </div>
      </ MuiThemeProvider>
    )
}
}

export default App;
