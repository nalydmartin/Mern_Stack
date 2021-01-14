
import './App.css';
import React from 'react';
import {Router} from '@reach/router';

import Home from './components/Home';
import General from './components/General';
import Extra from './components/Extra';

function App() {
  return (
    <div className="App">
      <Router>

        <Home path="/home" />
        <General path="/:thing" />
        <Extra path="/:word/:text/:background" />
        
      </Router>


    </div>
  );
}

export default App;
