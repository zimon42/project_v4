import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import {BrowserRouter as Router} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

import HomePage from './HomePage/HomePage';
import AdminPage from './AdminPage/AdminPage';
import VotePage from './VotePage/VotePage';

// HorizontalSliderVotePanel

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route path="/" strict exact component={HomePage} />
        <Route path="/admin/" strict exact component={AdminPage} />
        <Route path="/vote/" strict exact component={VotePage} />
      </div>
      </Router>          
    );
  }
}

export default App;
