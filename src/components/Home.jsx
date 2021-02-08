import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import NewProjectForm from '../Forms/NewProjectForm';
import {
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

const Home = props => {
  const { currentUser, projects, setProjects } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectTitle, setProjectTitle] = useState('');

  const submitNewProject = () => {
    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: projectTitle,
        user_id: currentUser.id,
      }),
    })
      .then(resp => resp.json())
      .then(project => {
        onClose();
        setProjects([...projects, project])
      });
  };

  return (
    <div>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        w="50%"
        style={{ margin: '0 auto' }}
      >
        {projects.map(project => (
          <GridItem>
            <ProjectCard key={project.id} project={project} />
          </GridItem>
        ))}
        <Button onClick={onOpen}>Make New Project</Button>
        <NewProjectForm
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
          isOpen={isOpen}
          onClose={onClose}
          submitNewProject={submitNewProject}
        />
      </Grid>
    </div>
  );
};

export default Home;
