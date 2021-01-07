

import './App.css';


import NewComponent from './components/newComponent';


function App() {
  return (
    <div className="App"> 
      <NewComponent example={"Hello Pup!"}/>
      <NewComponent example={"*wags tail*"}/>

    </div>
  );
}

export default App;
