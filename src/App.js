import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setcurrentUser] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users/2')
      .then(response => response.json())
      .then(data => {
        const res = data[0];
        setcurrentUser(res);
        setProjects(res.projects);
        setloggedIn(true);
      });
  }, []);
  return (
    <Switch>
      <Route path="/">
        {console.log(loggedIn)}
        <Home
          currentUser={currentUser}
          projects={projects}
          setProjects={setProjects}
        />
      </Route>
      {/* <Route path="/project/:id">
          render={(props) => (<ProjectPage {...props}/>)}
        </Route> */}
    </Switch>
  );
}

export default App;
