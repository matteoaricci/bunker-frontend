import React, { useState, useEffect, Fragment } from 'react';
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

  useEffect(() => {}, [project]);

  const addTask = (colIndex, column, description) => {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ column_id: column.id, description }),
    })
      .then(resp => resp.json())
      .then(task => {
        let currentProj = Object.assign({}, project);
        let newProj = currentProj;
        console.log(newProj.columns[colIndex]);
        newProj.columns[colIndex].tasks = [
          ...newProj.columns[colIndex].tasks,
          task,
        ];
        console.log(newProj === project);
        setProject(newProj);
      });
  };

  return (
    <div>
      <h1>{project.title}</h1>
      <HStack className="columns" overflowX="auto" pb="5px">
        {project.columns?.map((column, index) => (
          <ColumnCard addTask={addTask} column={column} colIndex={index} />
        ))}
      </HStack>
    </div>
  );
};

export default ProjectPage;
