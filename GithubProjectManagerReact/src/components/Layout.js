import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarMenu from './NavBarMenu'


const Layout = (props) =>{
  return (
    <div>
      <MuiThemeProvider>
        <NavBarMenu />
      </MuiThemeProvider>
      {props.children}
   </div>
  )
}

export default Layout;
