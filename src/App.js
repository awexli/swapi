import React, { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import People from './components/people';
import Planets from './components/planets';
import { ApiService } from './api-service';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApi() {
      try {
        setPeople(await ApiService.fetchPeople());
        setPlanets(await ApiService.fetchPlanets());
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    }

    loadApi();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People people={people}/>
              </Route>
              <Route exact path="/planets">
                <Planets planets={planets} />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
