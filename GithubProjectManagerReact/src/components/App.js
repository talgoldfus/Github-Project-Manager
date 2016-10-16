import React from 'react';
import Layout from './Layout'
import SignupForm from  '../containers/forms/Signup'
import LogInForm from  '../containers/forms/LogIn'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarMenu from './NavBarMenu'
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const App = ()=> {
  return (

      <MuiThemeProvider muiTheme={getMuiTheme()} >
        <div className="App">
              <NavBarMenu/>

              <SignupForm />
              <LogInForm />
        </div>
      </ MuiThemeProvider>
    )
}

export default App;
