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
  },
};



export default class AsigneeList extends React.Component {

  constructor(props){
    super(props)
    this.renderAsignees.bind(this)
  }

  handleTouchTap(username) {
    alert(`You want to see ${username} profile ?`);
  }

  handleRequestRemove(username) {
    alert(`You want to remove ${username} from this task ?`);
  }

  renderAsignees(){
    let asignees = this.props.asignees || []
    asignees.map((asignee)=>{
      return(
        <Chip
          key={asignee.id}
          onRequestDelete={()=>this.handleRequestRemove(asignee.username)}
          onTouchTap={()=>this.handleTouchTap(asignee.username)}
          style={styles.chip}
        >
          <Avatar src={asignee.profileImage}/>
          {asignee.username}
        </Chip>
      )
    })
    return asignees
  }

  render() {
       const asignees = this.renderAsignees()
       return (
         <div style={styles.wrapper}>
         <h4>Asignees:</h4>
            {asignees}
          </div>
      )
  }
}
