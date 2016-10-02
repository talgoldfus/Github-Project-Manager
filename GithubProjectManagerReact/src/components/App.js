import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarMenu from './NavBarMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBarMenu />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
