import React from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Login } from './Login';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}
