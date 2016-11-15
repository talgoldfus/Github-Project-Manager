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

// const TestAsignees = [{id:2,profileImage: "http://www.material-ui.com/images/ok-128.jpg",username:"John"},{id:1,profileImage: "http://www.material-ui.com/images/kolage-128.jpg",username:"James"}]
// const TestTasks1 =[
// {
//   id:1,
//   title:"To Do 1",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: TestAsignees
// },
// {
//   id:2,
//   title:"To Do 2",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: [TestAsignees[0]]
//
// },
// {
//   id:3,
//   title:"To Do 3",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: []
// }
// ]
//
// const TestTasks2 =[
// {
//   id:4,
//   title:"In Review 1",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: TestAsignees
// },
// {
//   id:5,
//   title:"In Review 2",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: [TestAsignees[0]]
//
// },
// {
//   id:6,
//   title:"In Review 3",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: []
// }
// ]
//
// const TestTasks3 =[
// {
//   id:7,
//   title:"Completed 1",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: TestAsignees
// },
// {
//   id:8,
//   title:"Completed 2",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: [TestAsignees[0]]
//
// },
// {
//   id:9,
//   title:"Completed 3",
//   subtitle:"Test",
//   description:"Testing Task List container and task components",
//   priority:2,
//   asignees: []
// }
// ]

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
    getProject(parseInt(this.props.routeParams.id))
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
    const {openTasks,inReviewTasks,closedTasks} = this.porps.tasks

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
          <Tab label="in-review" value="in-review">
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
  return {taks: state.project.tasks}
}

const ProjectPageContainer = connect(mapStateToProps,null)(ProjectPage)

export default withRouter(ProjectPageContainer)
