import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import  City  from './components/City'
import  Signin  from './components/Signin'
import  SignUp  from './components/SignUp'
import authActions from './redux/actions/authActions'
import { connect } from 'react-redux'

function App({ logInPersistent }) {

  useEffect(() => {
    if(localStorage.getItem('token')){
      logInPersistent(localStorage.getItem('token'))
    }
  }, [])
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cities" element={ <Cities /> } />
          <Route path="/city/:id" element={ <City /> } />
          <Route path="/signin" element={ <Signin /> } />
          <Route path="/signup" element={ <SignUp /> } />
        </Routes>    
    </Router>
  );
}
// const mapStateToProps = (state) =>{

//   }
  const mapDispatchToProps = {
    logInPersistent: authActions.logInPersistent
  }
export default connect(null, mapDispatchToProps)(App)

