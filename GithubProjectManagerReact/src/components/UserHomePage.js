import React from 'react';
import AllUserProjects from '../containers/AllUserProjects'
import AllUserTasks from '../containers/AllUserTasks'
import AddProjectButton from '../components/AddProjectButton'

const UserHomePage = props => {


  return (
        <div className="UserHomePage">
          <AllUserProjects />
          <br />
          <AddProjectButton/>
          <br />
          <AllUserTasks />
        </div>
    )
}


export default UserHomePage;
