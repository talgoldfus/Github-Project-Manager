import React, {Component} from 'react';
import {List} from 'material-ui/List';
import TaskContainer from './TaskContainer'
import Divider from 'material-ui/Divider';


class TaskList extends Component {

  renderTask(task){
    return (
    <div key={task.id}>
        <TaskContainer
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
    const taskList = tasks.map( task => {
      return this.renderTask(task)
    },this)

    return (
            <List>
              {taskList}
              <Divider />
            </List>
          )
  }
}

export default TaskList
