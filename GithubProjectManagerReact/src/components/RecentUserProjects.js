import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import getRecentUserProjects from '../actions/getRecentUserProjects'
import FlatButton from 'material-ui/FlatButton';


class RecentUserProjects extends Component {

  componentWillMount(){
    this.props.getRecentUserProjects(3)
  }

  sortProjects(){
    let projects = this.props.userProjects || []
    return projects.reverse((a)=> a.access_level)
  }


  renderProject(project){
    return <Paper zDepth={3} key={project.id}>
      <ListItem
        leftAvatar={<FontIcon className="fa fa-github" />}
        primaryText={project.title}
        value={project.id}
        rightIcon={<p>{project.access_level}</p>}
        onTouchTap={()=> browserHistory.push(`/projects/${project.id}`)}
      />
    </Paper>
  }

  render(){
    const ProjectList = this.sortProjects().map( project => {
      return this.renderProject(project)
    },this)

    return (
          <div>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text="Recently Updated Projects" />
              </ToolbarGroup>
                <FlatButton
                  label="Role"
                  labelPosition="before"
                  primary={true}
                  onTouchTap={()=>this.forceUpdate()}
                  icon={<FontIcon className="fa fa-sort"/>}
                />
            </Toolbar>
            <List>
              {ProjectList}
              <Divider />
            </List>
          </div>
          )
  }
}


function mapStateToProps (state) {
  return { userProjects: state.project.recentUserProjects }
}

export default connect( mapStateToProps,{getRecentUserProjects})(RecentUserProjects)
