import React from 'react';
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import logout from '../actions/logout'

const Logged = (props) => {

  const logout = () => props.logout()
  const IconMenuProps = Object.assign({},props)
  delete IconMenuProps.logout

  return (
    <IconMenu
      {...IconMenuProps}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onTouchTap={()=>logout()} />
    </IconMenu>
  )

};

Logged.muiName = 'IconMenu';

const LoggedConnector = connect(null,{logout})(Logged)

export default LoggedConnector
