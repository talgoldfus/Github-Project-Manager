import React,{Component} from 'react';
import AsigneeList from '../components/AsigneeList';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


class TaskFull extends Component {

constructor(props){
  super(props)
  this.renderEditorialOptions = this.renderEditorialOptions.bind(this)
}

renderEditorialOptions(){
  debugger
    if (this.props.accessLevel === 'manager'){
      return(
        <FlatButton
          label="EDIT"
          labelPosition="before"
          primary={true}
          icon={<FontIcon className="fa fa-pencil" />}
        />
      )
    }
    else{
      return null
    }
  }

  render(){
    const task = this.props.fullDetails(this.props.id)

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
        {this.renderEditorialOptions()}
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    fullDetails: (id) => {
    return state.project.tasks.find(t => t.id === id )
    } ,
   accessLevel: state.project.accessLevel
  }
}

const TaskFullContainer = connect(mapStateToProps,null)(TaskFull)
export default TaskFullContainer;
