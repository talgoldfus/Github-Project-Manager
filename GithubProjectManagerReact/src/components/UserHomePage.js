import React from 'react';
import AllUserProjects from '../containers/AllUserProjects'
import AllUserTasks from '../containers/AllUserTasks'

const UserHomePage = props => {


  return (
        <div className="UserHomePage">
          <AllUserProjects />
          <br />
          <AllUserTasks />
        </div>
    )
}


export default UserHomePage;
