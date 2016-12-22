import React from 'react';
import AllUserProjects from '../containers/AllUserProjects'
import AddProjectButton from '../components/AddProjectButton'

const UserProjectsPage = props => {


  return (
        <div className="UserProjectsPage">
          <AllUserProjects />
          <AddProjectButton/>
        </div>
    )
}


export default UserProjectsPage;
