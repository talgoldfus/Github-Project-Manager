import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskLists from './TaskLists'
import getProject from '../actions/getProject'
import {filterAllTasks} from '../helpers/taskFilters'
import AddTaskButton from '../components/AddTaskButton'

class ProjectPage extends React.Component {

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
        <p>ProjectPage</p>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Todo" value="todo" >
            <div>
              <TaskLists tasksList={todoTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="In-Progress" value="inProgress" >
            <div>
              <TaskLists tasksList={inProgressTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="In-Review" value="inReview">
            <div>
              <TaskLists tasksList={inReviewTasks} />
              <AddTaskButton />
            </div>
          </Tab>
          <Tab label="Completed" value="completed">
            <div>
              <TaskLists tasksList={completedTasks} />
              <AddTaskButton />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}




function mapStateToProps(state){
  return {tasks: state.project.tasks}
}



const ProjectPageContainer = connect(mapStateToProps,{getProject})(ProjectPage)

export default withRouter(ProjectPageContainer)
