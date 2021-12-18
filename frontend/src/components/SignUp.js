import React, { useState, useEffect } from 'react'
import { Footer } from './Footer'
import  SideNav  from './SideNav'
import { Link } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'


 const SignUp = ({insertUser}) => {
    const [color, setColor] = useState('')
    const [message, setMessage] = useState('')
    const [countries, setCountries] = useState('')
    const [newUser, setNewUser] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        urlphoto: "",
        country: ""
    })

    useEffect(() => {
        axios
          .get("https://restcountries.com/v2/all?fields=name")
          .then((res) => setCountries(res.data))
      }, []);
// console.log(country)
    const handleLogin = (e) => {
        setColor('')
    }

    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        if(isFormValid()){
            const errors = await insertUser(newUser)
            
            // console.log(errors)
            if(errors !== undefined){
                if(errors.errors){
                    errors.errors.map(e => setMessage((e)))
                }
            }
        } 
    }

    const responseGoogle = (res) => {
        let googleUser = {
            name: res.profileObj.name,
            lastname: 'google',
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            country: 'Chile',
            urlphoto: res.profileObj.imageUrl,
            google: true,
        }
        insertUser(googleUser)
        .then((res) => res.dat.success)
        .catch((err) => console.log(err))
      }

    const isFormValid = () => {
        if(newUser.name.trim().length === 0){
            setColor('name')
            return false
        }else if(newUser.lastname.trim().length === 0){
            setColor('lastname')
            return false
        }else if(!validator.isEmail(newUser.email)){
            setColor('email')
            return false
        }else if(newUser.password.length < 5){
            setColor('password')
            return false
        }else if(newUser.urlphoto.trim().length === 0){
            setColor('photo')
            return false
        }else if(newUser.country.trim().length === 0){
            setColor('country')
            return false
        }
        
        return true
    }

    return (
        <div>
            <SideNav />
            <div className="container_form_signup">
            <div className="container div_form">
                <form onSubmit={ handleRegister }>
                    <div className="imgcontainer">
                    <h2>Sign Up</h2>
                    </div>
                    <div className="row div_input_signup">
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="name" 
                                placeholder= {color === 'name' ? 'name is required' : 'First Name'}
                                style={{
                                    backgroundColor: color === 'name' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'name' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="lastname" 
                                placeholder= {color === 'lastname' ? 'last name is required' : 'Last Name'}
                                style={{
                                    backgroundColor: color === 'lastname' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'lastname' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="email" 
                                placeholder= {color === 'email' ? 'email is required' : 'Email'}
                                style={{
                                    backgroundColor: color === 'email' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'email' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                            <input 
                                type="password" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="password" 
                                placeholder= {color === 'password' ? 'password is required' : 'Password'}
                                style={{
                                    backgroundColor: color === 'password' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'password' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                                />
                                <span className="span_pass">Password must have min. 6 characters</span>
                        </div>
                        <div className="col-sm-8 divinput">
                        </div>
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="urlphoto" 
                                placeholder= {color === 'photo' ? 'photo is required' : 'Photo'}
                                style={{
                                    backgroundColor: color === 'photo' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'photo' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                        <select 
                            name="country" 
                            onChange={ handleInputChange } 
                            component="select" 
                            className="input_select"> 
                             <option className="input_user">Slect Country</option>
                            { countries.length > 0 &&  
                            countries.map((elem, index) => <option key={index} className="option">{elem.name}</option>) }
                        </select> 
                        </div>
                    </div>
                    <div className="row div_btns_signup">
                        <div className="col-sm-8"><button type="submit" className="btn_signin">SIGN UP</button></div>
                        <div className="col-sm-8 div_a_sign"> <span className="psw">You do not have an account ? <Link to="/signin">Sign up here !</Link></span></div>
                        <div className="col-sm-8">
                        <GoogleLogin
                            clientId="792350581311-56brtufk0lo9c129f11vgfmlvm34qone.apps.googleusercontent.com"
                            buttonText="Sign In with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        </div>
                    </div>
                </form>
            </div>
        </div> 
         <Footer />
        </div>
    )
}
const mapStateToProps = (state) =>{
return {
    user: state.authReducer.user
}
}

const mapDispatchToProps = {
    insertUser: authActions.insertUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)