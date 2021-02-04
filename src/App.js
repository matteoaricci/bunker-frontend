import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage'
import Navbar from './components/Navbar'

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setcurrentUser] = useState({});
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users/2')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // setcurrentUser(data.user)
        // setProjects(data.projects)
        setloggedIn(true)
      });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home currentUser={currentUser} projects={projects}/>
        </Route>
        <Route path="/project/:id">
          render={(props) => (<ProjectPage {...props}/>)}
        </Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
