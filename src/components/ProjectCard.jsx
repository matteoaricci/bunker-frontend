import React from 'react';
import { Box } from '@chakra-ui/react';

const ProjectCard = props => {
  const { project } = props;
  return (
    <Box
      style={{ margin: '0 auto' }}
      rounded="2%"
      maxW="300px"
      minW="300px"
      w="300px"
      h="200px"
      boxShadow="md"
      overflow="hidden"
    >
      <Box
        style={{ backdropFilter: 'blur(5px)' }}
        position="absolute"
        bg="white"
        w="300px"
        h="200px"
        rounded="2%"
        zIndex={-1}
      ></Box>
      <Box
        top="10%"
        position="relative"
        zIndex={1}
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        {project.title}
      </Box>
    </Box>
  );
};

export default ProjectCard;
