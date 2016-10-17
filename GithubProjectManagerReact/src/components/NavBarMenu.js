import React,{Component} from 'react';
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import LoginButton from './LoginButton'
import LoggedButton from './LoggedButton'

class NavBarMenu extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Github Project Manager"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.logged ? <LoggedButton /> : <LoginButton />}
        />
      </div>
    );
  }
}

function mapStateToProps(state ) {
    return {logged: state.authentication.authenticated}
}

const NavBarMenuContainer = connect(mapStateToProps)(NavBarMenu)

export default NavBarMenuContainer
