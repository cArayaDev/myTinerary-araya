import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { SideNav } from './SideNav'
import authActions from '../redux/actions/authActions'
import authReducer from '../redux/reducers/authReducer'
import { connect } from 'react-redux'

const Signin = ({logIn, oneUser}) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        logIn(user)
        // console.log(name)
    }
    
   return (
  <div>
    <SideNav />
        <div className="container_form">
            <div className="container ">
                <form onSubmit={ handleLogin }>
                    <div className="imgcontainer">
                    <h2>Sign in</h2>
                    </div>
                    <div className="row div_inputs">
                        <div className="col-sm-8">
                            <input 
                                type="text" 
                                className="input_user" 
                                onChange={ handleInputChange } 
                                placeholder="Email" 
                                name="email" 
                            />
                        </div>
                        <div className="col-sm-8">
                            <input 
                                type="password" 
                                className="input_user" 
                                onChange={ handleInputChange }
                                placeholder="Password" 
                                name="password" 
                            />
                        </div>
                    </div>
                    <div className="row div_btns">
                        <div className="col-sm-8"><button type="submit" className="btn_signin">SIGN IN</button></div>
                        <div className="col-sm-8 div_a_sign"> <span className="psw">You do not have an account ? <Link to="/signup">Sign up here !</Link></span></div>
                        <div className="col-sm-8"><button type="button" className="btngoogle">Sign In with Google</button></div>
                    </div>
                </form>
            </div>
        </div>
    <Footer />
  </div>
    )
}
const mapStateToProps = () =>{
    return {
        oneUser: authReducer.oneUser
    }
    }
    
    const mapDispatchToProps = {
        logIn: authActions.logIn
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Signin)