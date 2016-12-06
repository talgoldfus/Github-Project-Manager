import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router'



class ProjectList extends Component {

  render_project(project){
    return (
        <Paper zDepth={3} key={project.id}>
          <ListItem
            leftAvatar={<FontIcon className="fa fa-github" />}
            primaryText={project.title}
            value={project.id}
            onTouchTap={()=> browserHistory.push(`/projects/${project.id}`)}
          />
        </Paper>
    )
  }

  render(){
    const projects = this.props.projects ? this.props.projects.map( project => {
      return this.render_project(project)
    },this) : []

    return (
            <div>
              <List>
                {projects}
              </List>
            </div>
          )
  }
}


export default ProjectList
