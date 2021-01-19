
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import { Router } from '@reach/router';

function App() {
  return (

    <div className="App">


      <Router>
        <Main path="products/"/>
        <Details path="products/:id"/>
      </Router>


    </div>
  );
}

export default App;
