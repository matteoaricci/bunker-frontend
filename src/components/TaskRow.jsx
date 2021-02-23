import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const TaskRow = ({ task, index, colIndex, removeTask }) => {
  return (
    <Box>
      {task.description}
      <Button onClick={() => removeTask(colIndex, task)}>X</Button>
    </Box>
  );
};

export default TaskRow;


// const removeTask = (colIndex, column, description, task) => {
