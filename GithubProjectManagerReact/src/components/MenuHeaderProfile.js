import React from 'react';
import {connect} from 'react-redux'
import Avatar from 'material-ui/Avatar';

const MenuHeaderProfile = props => {
  return(
    <div className="menuHeaderProfile">
      <Avatar src={props.user.profile_picture} />
      <h4>{props.user.username}</h4>
    </div>
  )

}

function mapStateToProps(state ) {
    return {user: state.user }
}


export default connect(mapStateToProps)(MenuHeaderProfile)
