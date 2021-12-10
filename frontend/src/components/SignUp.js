import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { Footer } from './Footer'
import { SideNav } from './SideNav'
import { Link } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import authReducer from '../redux/reducers/authReducer';


 const SignUp = ({insertUser}) => {
    const [color, setColor] = useState('')
    // const [valueCountry, setValueCountry] = useState('')
    const [countries, setCountries] = useState('')
    const [newUser, setNewUser] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        urlphoto: "",
        country: ""
    })
    // const { name, lastname, email, password, password2, urlphoto, country } = formValues

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
    const handleRegister = (e) => {
        e.preventDefault()

        console.log('formulario correcto....', newUser)
    //    if(isFormValid()){
         insertUser(newUser)
        // reset()
    //    } 
    }
    // const isFormValid = () => {
    //     if(name.trim().length === 0){
    //         setColor('name')
    //         return false
    //     }else if(lastname.trim().length === 0){
    //         setColor('lastname')
    //         return false
    //     }else if(!validator.isEmail(email)){
    //         setColor('email')
    //         return false
    //     }else if(password !== password2 || password.length < 5){
    //         setColor('password')
    //         return false
    //     }else if(urlphoto.trim().length === 0){
    //         setColor('photo')
    //         return false
    //     }else if(country.trim().length === 0){
    //         setColor('country')
    //         return false
    //     }
        
    //     return true
    // }

    return (
        <div>
            <SideNav />
            <div className="container_form_signup">
            <div className="container div_form">
                <form onSubmit={ handleRegister }>
                    <div className="imgcontainer">
                    <h2>Sign in</h2>
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
                            {/* <input 
                                type="password" 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="password2" 
                                placeholder= {color === 'password2' ? 'password is required' : 'Repeat Password'}
                                style={{
                                    backgroundColor: color === 'password2' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'password2' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            /> */}
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
                        <select name="country" onChange={ handleInputChange } component="select" className="input_user"> 
                            <option>Slect Country</option>
                            { countries.length > 0 &&  
                            countries.map((elem, index) => <option key={index}>{elem.name}</option>) }
                        </select> 
                        </div>
                    </div>
                    <div className="row div_btns_signup">
                        <div className="col-sm-8"><button type="submit" className="btn_signin">SIGN IN</button></div>
                        <div className="col-sm-8 div_a_sign"> <span className="psw">You do not have an account ? <Link to="/signin">Sign up here !</Link></span></div>
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
    user: authReducer.user
}
}

const mapDispatchToProps = {
    insertUser: authActions.insertUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)