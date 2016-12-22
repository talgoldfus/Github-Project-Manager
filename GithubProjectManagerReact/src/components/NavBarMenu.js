import React,{Component} from 'react';
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import LoginButton from './LoginButton'
import LoggedButton from './LoggedButton'
import MenuHeaderProfile from './MenuHeaderProfile'
import logout from '../actions/logout'



class NavBarMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle.bind(this)
    this.handleClose.bind(this)
    this.logout.bind(this)
  }

  logout(){
    debugger
    this.props.logout()
    this.handleClose()
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {
    const loggedIn= this.props.logged

    return (
      <div>
        <AppBar
          title="Github Project Manager"
          onLeftIconButtonTouchTap={ loggedIn ? ()=>this.handleToggle() : null}
          iconElementRight={ loggedIn ? <LoggedButton /> : <LoginButton />}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuHeaderProfile />
          <Menu>
              <MenuItem primaryText="My Tasks"/>
              <MenuItem primaryText="My Projects"  />
              <Divider />
              <MenuItem primaryText="Add a project"/>
              <MenuItem primaryText="Logout" onTouchTap={()=>this.logout()} />
          </Menu>
       </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state ) {
    return {logged: state.authentication.authenticated }
}

const NavBarMenuContainer = connect(mapStateToProps,{logout})(NavBarMenu)

export default NavBarMenuContainer
