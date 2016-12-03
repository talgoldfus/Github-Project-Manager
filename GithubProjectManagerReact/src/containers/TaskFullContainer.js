import React,{Component} from 'react';
import AssigneeList from '../components/AssigneeList';
import {connect} from 'react-redux';
import EditTaskForm from './forms/EditTask'

class TaskFull extends Component {

constructor(props){
  super(props)
  this.renderTaskInfo = this.renderTaskInfo.bind(this)
  this.renderEditTaskInfo = this.renderEditTaskInfo.bind(this)
}

  renderTaskInfo(task){
    return(
            <div>
              <div>
                <div>
                  <h2>{task.title}</h2>
                  <h2>Priority: {task.priority}</h2>
                </div>
                <h4>{task.description}</h4>
                <p>{task.content}</p>
              </div>
              <AssigneeList assignees={task.assignees}/>
            </div>
          )
  }

  renderEditTaskInfo(task){
    let serializedTask = Object.assign({}, task, {
      assignees: task.assignees.map(user => {
        return {user: user.username}
     })
  })
    return(
            <div>
              <EditTaskForm initialValues={serializedTask} />
            </div>
          )
  }

  render(){
    const task = this.props.fullDetails(this.props.id)
    const showTask = this.renderTaskInfo(task)
    const editTask = this.renderEditTaskInfo(task)

    return(
      <div>
        {this.props.edit ? editTask : showTask }
      </div>
    )
  }

};

function mapStateToProps(state){
  return {
    fullDetails: (id) => {
    return state.tasks.byId.find(t => t.id === id )
    },
    edit: state.tasks.editing
  }
}

const TaskFullContainer = connect(mapStateToProps,null)(TaskFull)
export default TaskFullContainer;
