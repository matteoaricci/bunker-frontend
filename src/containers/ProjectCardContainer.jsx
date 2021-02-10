import React, { Fragment } from 'react';
import { Text, Button, HStack, StackDivider } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import NewProjectForm from '../Forms/NewProjectForm';

const ProjectCardContainer = ({
  onOpen,
  projects,
  projectTitle,
  setProjectTitle,
  isOpen,
  onClose,
  submitNewProject,
}) => {
  return (
    <Fragment>
      <div
        style={{
          position: 'absolute',
          width: '10%',
          height: '100%',
        }}
      >
        <Text
          position="relative"
          textTransform="uppercase"
          textAlign="center"
          top="10%"
          left="50%"
          style={{ transform: 'translate(-50%)' }}
        >
          Projects
        </Text>
        <Button
          top="40%"
          left="50%"
          style={{
            position: 'relative',
            borderRadius: '50%',
            transform: 'translate(-50%)',
          }}
          onClick={onOpen}
        >
          +
        </Button>
      </div>
      <HStack
        ml="10%"
        overflowX="auto"
        h="100%"
        align="stretch"
        divider={<StackDivider borderColor="white" />}
        pb="1%"
        pl="1%"
        mt="5%"
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <NewProjectForm
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
          isOpen={isOpen}
          onClose={onClose}
          submitNewProject={submitNewProject}
        />
      </HStack>
    </Fragment>
  );
};

export default ProjectCardContainer;
