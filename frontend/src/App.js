import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cities from './pages/Cities';
import  City  from './components/City';
import { Signin } from './components/Signin';
import { SignUp } from './components/SignUp';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cities" element={ <Cities /> } />
          <Route path="/city/:id" element={ <City /> } />
          <Route path="/signin" element={ <Signin /> } />
          <Route path="/signup" element={ <SignUp /> } />
          {/* <Route path="*" element={ <Error /> } /> */}
        </Routes>    
    </Router>
  );
}

export default App;
