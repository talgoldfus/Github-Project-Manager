import axios from 'axios'


function updateTask(task){
  return{
    type: 'UPDATE_TASK',
    payload: task
  }
}


export default updateTask
