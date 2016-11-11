import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import SelectableList from './SelectableList'
import Task from '../components/Task'

class TaskList extends Component {

  wrapTaskInListItems(task){
    let taskComponent = (
      <Task
        title={task.title}
        subtitle={task.subtitle}
        description={task.description}
        asignees={task.asignees}
      />
    )

    return (
        <ListItem
          primaryText={taskComponent}
          key={task.id}
          value={task.id}
        />
    )
  }

  render(){
    const tasks = this.props.tasksList || []
    const wrappedTasks = tasks.map( task => {
      return this.wrapTaskInListItems(task)
    },this)

    return (
            <div>
              <SelectableList defaultValue={1}>
                {wrappedTasks}
              </SelectableList>
            </div>
          )
  }
}

export default TaskList
