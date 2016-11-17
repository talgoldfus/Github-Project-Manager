import React, {Component} from 'react';
import {List} from 'material-ui/List';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import TaskInfoContainer from './TaskInfoContainer'
import Divider from 'material-ui/Divider';
import {sortTasksByPriority} from '../helpers/taskFilters'
import IconButton from 'material-ui/IconButton';


class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = { order: "ASC" };
    this.toggleOrder = this.toggleOrder.bind(this)
  }

  toggleOrder(){
    this.setState( prevState => {
      let filter = prevState.order === 'ASC' ? 'DESC' : 'ASC'
      return { order: filter}
    })
  }

  renderTask(task){
    return (
    <div key={task.id}>
        <TaskInfoContainer
          status={task.status}
          title={task.title}
          labels={task.labels}
          priority={task.priority}
          id={task.id}
        />
        <Divider />
    </div>
    )
  }

  render(){
    const tasks = this.props.tasksList || []
    const taskList = sortTasksByPriority(tasks,this.state.order).map( task => {
      return this.renderTask(task)
    },this)

    return (
          <div>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Title" />
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}>
                <ToolbarTitle text="Order by priority"/>
                <IconButton
                  iconClassName="fa fa-sort"
                  onTouchTap={this.toggleOrder}
                />
              </ToolbarGroup>
            </Toolbar>
            <List>
              {taskList}
              <Divider />
            </List>
          </div>
          )
  }
}

export default TaskList
