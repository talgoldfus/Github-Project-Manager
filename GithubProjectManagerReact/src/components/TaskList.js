import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router'



class TaskList extends Component {

  render_task(task){
    return (
        <Paper zDepth={3} key={task.id}>
          <ListItem
            leftAvatar={<FontIcon className="fa fa-github" />}
            primaryText={task.title}
            secondaryText={task.project.title}
            value={task.id}
            onTouchTap={()=> browserHistory.push(`/projects/${task.project.id}`)}
          />
        </Paper>
    )
  }

  render(){
    const tasks = this.props.tasks ? this.props.tasks.map( task => {
      return this.render_task(task)
    },this) : []

    return (
            <div>
              <List>
                {tasks}
              </List>
            </div>
          )
  }
}


export default TaskList
