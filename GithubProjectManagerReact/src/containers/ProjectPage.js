import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskLists from './TaskLists'
import {Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn} from 'material-ui/Table';
import getProject from '../actions/getProject'
import {filterAllTasks} from '../helpers/taskFilters'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class ProjectPage extends React.Component {

  componentWillMount(){
    this.props.getProject(parseInt(this.props.routeParams.id))
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'open',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };


  render() {
    const tasks = this.props.tasks || []
    const {openTasks,inReviewTasks,closedTasks} = filterAllTasks(tasks)

    return (
      <div>
        <p>ProjectPage</p>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="open" value="open" >
            <div>
              <h2 style={styles.headline}>Open</h2>
              <TaskLists tasksList={openTasks} />
            </div>
          </Tab>
          <Tab label="inReview" value="inReview">
            <div>
              <h2 style={styles.headline}>In-Review</h2>
              <TaskLists tasksList={inReviewTasks} />
            </div>
          </Tab>
          <Tab label="closed" value="closed">
            <div>
              <h2 style={styles.headline}>Closed</h2>
              <TaskLists tasksList={closedTasks} />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}




function mapStateToProps(state){
  return {tasks: state.project.tasks}
}



const ProjectPageContainer = connect(mapStateToProps,{getProject})(ProjectPage)

export default withRouter(ProjectPageContainer)
