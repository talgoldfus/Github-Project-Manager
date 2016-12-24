import React from 'react';
import RecentUserProjects from '../components/RecentUserProjects'
import AllUserTasks from '../containers/AllUserTasks'

const UserHomePage = props => {


  return (
        <div className="UserHomePage">
          <RecentUserProjects />
          <br />
          <AllUserTasks />
        </div>
    )
}


export default UserHomePage;
