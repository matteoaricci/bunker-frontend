import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import TaskRow from './TaskRow';
import NewTaskForm from '../Forms/NewTaskForm';

const ColumnCard = ({ column, colIndex, addTask, removeTask }) => {
  return (
    <Box minH="300px" minW="300px" boxShadow="md" p="2%">
      <Box
        boxShadow="sm"
        textAlign="center"
        fontSize="1.2rem"
        letterSpacing="1.5px"
        p="2%"
      >
        {column.title}
      </Box>
      <NewTaskForm addTask={addTask} column={column} colIndex={colIndex}/>
      <VStack>
        {column.tasks.map((task, index) => (
          <TaskRow task={task} index={index} colIndex={colIndex} removeTask={removeTask}/>
        ))}
      </VStack>
    </Box>
  );
};

export default ColumnCard;
