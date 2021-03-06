import React,{Component} from 'react';
import {ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import AssigneeList from './AssigneeList'
import Paper from 'material-ui/Paper';
import {filterIconName} from '../helpers/taskFilters'


class TaskInfo extends Component{

  render(){
    return(
      <Paper zDepth={3} >
        <ListItem
          leftAvatar={<FontIcon className={filterIconName(this.props.status)} />}
          primaryText={this.props.title}
          secondaryText={this.props.labels}
          rightIcon={<p>{this.props.priority}</p>}
        />
      </Paper>
    )
  }
};

export default TaskInfo;
