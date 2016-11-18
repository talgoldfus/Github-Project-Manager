import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddTaskButton = () => (
  <div>
    <FloatingActionButton secondary={true}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);


export default AddTaskButton
