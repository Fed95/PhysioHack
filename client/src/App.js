import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/results">Results</Link>
                  </li>
                  <li>
                      <Link to="/profile">Profile</Link>
                  </li>
              </ul>

              <Switch>
                  <Route path="/results">
                      <Results />
                  </Route>
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
