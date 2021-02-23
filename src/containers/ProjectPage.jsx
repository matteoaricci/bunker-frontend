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
        newProj.columns[colIndex].tasks = [
          ...newProj.columns[colIndex].tasks,
          task,
        ];
        setProject(newProj);
      });
  };

  const removeTask = (colIndex, task) => {
    fetch('http://localhost:3000/tasks/' + task.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: task.id,
      }),
    })
      .then(resp => resp.json())
      .then(task => {
        let newProj = Object.assign({}, project);
        let newColumn = newProj.columns[colIndex].tasks.filter(t => t.id !== task.id);
        newProj.columns[colIndex].tasks = newColumn
        setProject(newProj);
      });
  };

  return (
    <div>
      <h1>{project.title}</h1>
      <HStack className="columns" overflowX="auto" pb="5px">
        {project.columns?.map((column, index) => (
          <ColumnCard
            removeTask={removeTask}
            addTask={addTask}
            column={column}
            colIndex={index}
          />
        ))}
      </HStack>
    </div>
  );
};

export default ProjectPage;
