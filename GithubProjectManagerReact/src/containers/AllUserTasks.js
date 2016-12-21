import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskList from '../components/TaskList'
import getAllUserTasks from '../actions/getAllUserTasks'
import {filterAllTasks} from '../helpers/taskFilters'

class AllUserTasks extends Component {

  componentWillMount(){
    this.props.getAllUserTasks()
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
    debugger

    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Todo" value="todo" >
              <TaskList tasks={todoTasks} />
          </Tab>
          <Tab label="In-Progress" value="inProgress" >
              <TaskList tasks={inProgressTasks} />
          </Tab>
          <Tab label="In-Review" value="inReview">
              <TaskList tasks={inReviewTasks} />
          </Tab>
          <Tab label="Completed" value="completed">
              <TaskList tasks={completedTasks} />
          </Tab>
        </Tabs>
      </div>
    )
}
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.allUserTasks}
}

export default connect(mapStateToProps,{getAllUserTasks})(AllUserTasks)
