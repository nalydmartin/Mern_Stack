import {Router} from '@reach/router';
import './App.css';
import React from 'react';
import NewAuthor from './views/NewAuthor';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <NewAuthor path="new"/>
      <Home path="/" />
    </Router>
  );
}

export default App;
