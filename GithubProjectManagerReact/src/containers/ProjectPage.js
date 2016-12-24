import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';
import ProjectTaskList from './ProjectTaskList'
import getProject from '../actions/getProject'
import {filterAllTasks} from '../helpers/taskFilters'
import AddTaskButton from './AddTaskButton'

class ProjectPage extends Component {

  componentWillMount(){
    this.props.getProject(parseInt(this.props.routeParams.id))
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'todo',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };


  render() {
    const tasks = this.props.tasks || []
    const {todoTasks,inProgressTasks,inReviewTasks,completedTasks} = filterAllTasks(tasks)

    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Todo" value="todo" >
            <div>
              <ProjectTaskList tasksList={todoTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="In-Progress" value="inProgress" >
            <div>
              <ProjectTaskList tasksList={inProgressTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="In-Review" value="inReview">
            <div>
              <ProjectTaskList tasksList={inReviewTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="Completed" value="completed">
            <div>
              <ProjectTaskList tasksList={completedTasks} />
              <AddTaskButton />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}




function mapStateToProps(state){
  return {tasks: state.tasks.byId}
}



const ProjectPageContainer = connect(mapStateToProps,{getProject})(ProjectPage)

export default withRouter(ProjectPageContainer)
