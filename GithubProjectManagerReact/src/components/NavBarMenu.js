import React,{Component} from 'react';
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Folder from 'material-ui/svg-icons/file/folder';
import LoginButton from './LoginButton'
import LoggedButton from './LoggedButton'
import MenuHeaderProfile from './MenuHeaderProfile'
import logout from '../actions/logout'


class NavBarMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout(){
    this.props.logout()
    this.handleClose()
  }

  browseTo(path){
    this.handleClose()
    browserHistory.push(path)
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
          onLeftIconButtonTouchTap={ loggedIn ? this.handleToggle : null}
          iconElementRight={ loggedIn ? <LoggedButton /> : <LoginButton />}
          onTitleTouchTap={()=>this.browseTo('/home')}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <MenuHeaderProfile />
        <Menu>
            <MenuItem
              primaryText="Home"
              leftIcon={<ActionHome />}
              onTouchTap={()=>this.browseTo('/home')}
            />
            <Divider />

            <MenuItem
              primaryText="All My Actvie Tasks"
              leftIcon={<NoteAdd />}
              onTouchTap={()=>this.browseTo('/tasks')}
            />
            <MenuItem
              primaryText="All My Actvie Projects"
              leftIcon={<Folder />}
              onTouchTap={()=>this.browseTo('/projects')}
            />
            <Divider />
            <MenuItem
              primaryText="Logout"
              leftIcon={<ExitToApp />}
              onTouchTap={this.logout}
            />
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
