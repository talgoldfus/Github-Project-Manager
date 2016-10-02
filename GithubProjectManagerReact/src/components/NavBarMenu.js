import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import ActionHome from 'material-ui/svg-icons/action/home';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const NavBarMenu = () => (
  <AppBar
    title="Github Project Manager"
    iconElementLeft={
      <Link to="/test" >
      <IconButton>
        <ActionHome/>
      </IconButton>
      </Link >}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      >
        <MenuItem primaryText="Home" onTouchTap={null} />
        <MenuItem primaryText="Sign In" onTouchTap={null} />
        <MenuItem primaryText="Sign out" onTouchTap={null} />
      </IconMenu>
    }
  />
);

export default NavBarMenu
