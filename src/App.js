import './App.css';
import SearchForm from './components/SearchForm';
import {Router} from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
function App() {
  return (
    <div className="App">
      <SearchForm/>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;