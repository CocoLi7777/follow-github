import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import FollwedPage from './page/FollowedPage';
import Navbar from './layout/Navbar';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/followed" component={FollwedPage} />
      </Switch>
    </Router>
  );
}

export default App;
