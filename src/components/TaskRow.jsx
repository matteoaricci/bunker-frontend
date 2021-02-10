import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

const TaskRow = ({ task }) => {
  return <Box>{task.description}</Box>;
};

export default TaskRow;
