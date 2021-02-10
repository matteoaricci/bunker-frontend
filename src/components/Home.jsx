import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ProjectCardContainer from '../containers/ProjectCardContainer';

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
        setProjects([...projects, project]);
        setProjectTitle('');
      });
  };

  return (
    <div>
      <ProjectCardContainer
        onOpen={onOpen}
        projects={projects}
        projectTitle={projectTitle}
        setProjectTitle={setProjectTitle}
        isOpen={isOpen}
        onClose={onClose}
        submitNewProject={submitNewProject}
      />
    </div>
  );
};

export default Home;
