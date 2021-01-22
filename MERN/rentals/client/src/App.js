import {Router, Redirect} from '@reach/router';
import './App.css';

// IMPORTS FROM VIEWS
import Dashboard from './views/Dashboard';
import NewRental from './views/NewRental';

function App() {
  return (
    <div className="App">


      <Router>
        <Redirect from="/" to="rentals" noThrow/> 
        <Dashboard  path="rentals" />
        <NewRental path="rentals/new" />
      </Router>
      
    </div>
  );
}
// noThrow will prevent redirect from throwing an error 

export default App;
