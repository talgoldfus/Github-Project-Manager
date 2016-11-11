import React, {Component} from 'react';
import TaskLists from './TaskLists'

const TestAsignees = [{id:2,profileImage: "http://www.material-ui.com/images/ok-128.jpg",username:"John"},{id:1,profileImage: "http://www.material-ui.com/images/kolage-128.jpg",username:"James"}]
const TestTasks =[
{
  id:1,
  title:"To Do 1",
  subtitle:"Test",
  description:"Testing Task List container and task components",
  asignees: TestAsignees
},
{
  id:2,
  title:"To Do 2",
  subtitle:"Test",
  description:"Testing Task List container and task components",
  asignees: [TestAsignees[0]]

},
{
  id:3,
  title:"To Do 3",
  subtitle:"Test",
  description:"Testing Task List container and task components",
  asignees: []
}
]




class ProjectPage extends Component {

  componentWillMount(){
  }

  render(){
    return (
            <div>
              <p>ProjectPage</p>
              <TaskLists tasksList={TestTasks} />
            </div>
          )
  }
}

export default ProjectPage
