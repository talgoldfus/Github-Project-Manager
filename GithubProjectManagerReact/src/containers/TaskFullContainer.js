import React,{Component} from 'react';
import AsigneeList from '../components/AsigneeList';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
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
              <AsigneeList asignees={task.asignees}/>
            </div>
          )
  }

  renderEditTaskInfo(task){
    return(
            <div>
              <EditTaskForm initialValues={task} />
              <AsigneeList asignees={task.asignees}/>
            </div>
          )
  }

  render(){
    const task = this.props.fullDetails(this.props.id)

    return(
      <div>
        {this.props.edit ? this.renderEditTaskInfo(task) : this.renderTaskInfo(task) }
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
