
import './App.css';
import React, { useState } from 'react';

import NewUser from "./components/NewUser";
import UserInfo from "./components/UserInfo";


function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  return (
    <div className="App">
        <NewUser inputs={state} setInputs={setState}/>
        <UserInfo data={state}/>
        
    </div>
  );
}

export default App;
