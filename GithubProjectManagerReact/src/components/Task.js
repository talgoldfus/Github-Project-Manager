import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AsigneeList from './AsigneeList'


const Task = (props) => (
  <Card>
    <CardHeader
      title={props.title}
      subtitle={props.subtitle}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {props.description}
      <AsigneeList asignees={props.asignees} />
    </CardText>
    <CardActions>
      <FlatButton label="Mark as completed" />
      <FlatButton label="Submmit to review" />
    </CardActions>
  </Card>
);

export default Task;
