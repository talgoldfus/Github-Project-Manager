import React,{Component} from 'react';
import {ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import AsigneeList from './AsigneeList'
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
          rightIcon={
            <div>
              <FontIcon className="fa fa-hourglass-start" />
              <p>{this.props.priority}</p>
            </div>
            }
        />
      </Paper>
    )
  }
};

export default TaskInfo;
