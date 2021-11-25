import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cities from './pages/Cities';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cities" element={ <Cities /> } />
          {/* <Route path="*" element={ <Cities /> } /> */}
        </Routes>    
    </Router>
  );
}

export default App;
