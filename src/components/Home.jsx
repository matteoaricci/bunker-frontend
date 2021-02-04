import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Grid, GridItem } from '@chakra-ui/react';

const Home = props => {
  const { currentUser, projects } = props;
  const fullName = currentUser.first_name + ' ' + currentUser.last_name;
  return (
    <div>
      <h1>Welcome {fullName}</h1>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        w="50%"
        style={{ margin: '0 auto'}}
      >
        {projects.map(project => (
          <GridItem>
            <ProjectCard key={project.id} project={project} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
