import React, {Component} from 'react';
import {List} from 'material-ui/List';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TaskInfoContainer from './TaskInfoContainer'
import Divider from 'material-ui/Divider';
import {sortTasksByPriority} from '../helpers/taskFilters'


class ProjectTaskList extends Component {

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
    const ProjectTaskList = sortTasksByPriority(tasks,this.state.order).map( task => {
      return this.renderTask(task)
    },this)

    return (
          <div>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Title" />
              </ToolbarGroup>
                <FlatButton
                  label="Priority"
                  labelPosition="before"
                  primary={true}
                  onTouchTap={this.toggleOrder}
                  icon={<FontIcon className="fa fa-sort"/>}
                />
            </Toolbar>
            <List>
              {ProjectTaskList}
              <Divider />
            </List>
          </div>
          )
  }
}

export default ProjectTaskList
