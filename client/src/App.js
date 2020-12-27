import './App.css';
import Home from './pages/Home';
import Results from "./pages/Results";
import Profile from "./pages/Profile";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  /*<Route path="/results">
                      <Results />
                  </Route>*/
                  <Route path="/profile">
                      <Profile />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
