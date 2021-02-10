import React, { useState, useEffect } from 'react';
import ColumnCard from '../components/ColumnCard';
import { HStack } from '@chakra-ui/react';

const ProjectPage = ({ match }) => {
  const { id } = match.params;
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/projects/' + id)
      .then(resp => resp.json())
      .then(project => setProject(project));
  }, []);

  return (
    <div>
      <h1>{project.title}</h1>
      <HStack className="columns" overflowX="auto" pb='5px'>
        {project.columns?.map(column => (
          <ColumnCard column={column} />
        ))}
      </HStack>
    </div>
  );
};

export default ProjectPage;
