import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

const TaskRow = ({ task, index, colIndex }) => {
  return <Box>{task.description}</Box>;
};

export default TaskRow;
