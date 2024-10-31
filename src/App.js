import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';
import TeamMatches from './components/teammatch';
import NotFound from './components/notfound';

function App() {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />
      {/* TeamMatches route with path parameter */}
      <Route path="/team-matches/:id" element={<TeamMatches />} />
      {/* NotFound route for unmatched paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
