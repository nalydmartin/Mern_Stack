
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'; 
import {Router} from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">

      <Router>

        <Form path="/"/>
        <People path="/people/:optionID" />
        <Planet path="/planets/:optionID" />
      </Router>
      
    </div>
  );
}

export default App;
