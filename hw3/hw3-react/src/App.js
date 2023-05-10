import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Houses from './components/Houses';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/search" element={<Search/>} />
            <Route exact path="/houses" element={<Houses/>} />
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
