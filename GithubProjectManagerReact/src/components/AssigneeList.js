import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};



export default class assigneeList extends React.Component {

  constructor(props){
    super(props)
    this.renderAssignees.bind(this)
  }

  renderAssignees(){
    return this.props.assignees.map((assignee)=>{
      return(
        <Chip
          key={assignee.id}
          style={styles.chip}
        >
          <Avatar src={assignee.profileImage}/>
          {assignee.username}
        </Chip>
      )
    })
  }

  render() {
       const notAssigned = (<h5>Currently no user have been assigned this task</h5>)
       const assignees = this.props.assignees ? this.renderAssignees() : notAssigned ;

       return (
           <div>
              <h4>assignees: </h4>
              <div style={styles.wrapper}>
                  {assignees}
              </div>
           </div>
        )
  }
}
