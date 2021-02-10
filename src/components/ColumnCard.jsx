import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import TaskRow from './TaskRow';

const ColumnCard = ({ column }) => {
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
      <VStack>
        {column.tasks.map(task => (
          <TaskRow task={task} />
        ))}
      </VStack>
    </Box>
  );
};

export default ColumnCard;
