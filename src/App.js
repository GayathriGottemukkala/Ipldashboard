import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/home';
import TeamMatches from './components/teammatch';
import NotFound from './components/notfound';

function App() {
  return (
    <Routes>
    {/* FIX3: "exact" keyword should be added */}
    <Route exact path="/" component={Home} />
    {/* FIX4: The Route component should be given the prop "component" */}
    {/* FIX5:  When mentioning path parameters for a route we need to use ":" before the variable */}
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Routes>
    
  );
}

export default App;
