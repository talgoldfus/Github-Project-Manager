import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import ProjectList from '../components/ProjectList'
import getAllUserProjects from '../actions/getAllUserProjects'
import AddProjectButton from '../components/AddProjectButton'

class AllUserProjects extends Component {

  componentWillMount(){
    this.props.getAllUserProjects()
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'manager',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };


  render() {
    const {managerProjects,collaboratorProjects} = this.props

    return (
      <div>
          <h1>My Active Projects</h1>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
          <Tab label="Manager" value="manager" >
            <div>
              <ProjectList projects={managerProjects} />
            </div>
          </Tab>
          <Tab label="Collaborator" value="collaborator" >
            <div>
              <ProjectList projects={collaboratorProjects} />
            </div>
          </Tab>
        </Tabs>
        <AddProjectButton/>
      </div>
    );
  }
}




function mapStateToProps(state){
  let userProjects = state.project.allUserProjects

  return {
    managerProjects: userProjects.manager,
    collaboratorProjects: userProjects.collaborator
  }
}

export default connect(mapStateToProps,{getAllUserProjects})(AllUserProjects)
