import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { Footer } from './Footer'
import { SideNav } from './SideNav'
import { Link } from 'react-router-dom'
import validator from 'validator'
import axios from 'axios'


export const SignUp = () => {
    const [color, setColor] = useState('')
    const [valueCountry, setValueCountry] = useState('')
    const [countries, setCountries] = useState('')
    const [formValues, handleInputChange, reset] = useForm({
        name: 'cristian',
        lastname: 'araya',
        email: 'caraya@tecnosis.cl',
        password: '123456',
        password2: '123456',
        photo: 'cristian.jpg',
        country: 'New Zeland'
    })
    const { name, lastname, email, password, password2, photo, country } = formValues

    useEffect(() => {
        axios
          .get("https://restcountries.com/v2/all?fields=name")
          .then((res) => setCountries(res.data))
      }, []);
console.log(country)
    const handleLogin = (e) => {
        setColor('')
        

    }
    const handleRegister = (e) => {
        e.preventDefault()

       if(isFormValid()){
        console.log('formulario correcto....')
        reset()
       } 
    }
    const isFormValid = () => {
        if(name.trim().length === 0){
            setColor('name')
            return false
        }else if(lastname.trim().length === 0){
            setColor('lastname')
            return false
        }else if(!validator.isEmail(email)){
            setColor('email')
            return false
        }else if(password !== password2 || password.length < 5){
            setColor('password')
            return false
        }else if(photo.trim().length === 0){
            setColor('photo')
            return false
        }else if(country.trim().length === 0){
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
                    <h2>Sign in</h2>
                    </div>
                    <div className="row div_input_signup">
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                value={name} 
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
                                value={lastname} 
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
                                value={email} 
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
                                value={password} 
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
                            <input 
                                type="password" 
                                value={password2} 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="password2" 
                                placeholder= {color === 'password2' ? 'password is required' : 'Repeat Password'}
                                style={{
                                    backgroundColor: color === 'password2' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'password2' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                            <input 
                                type="text" 
                                value={photo} 
                                onChange={ handleInputChange } 
                                className="input_user" 
                                name="photo" 
                                placeholder= {color === 'photo' ? 'photo is required' : 'Photo'}
                                style={{
                                    backgroundColor: color === 'photo' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: color === 'photo' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleLogin}
                            />
                        </div>
                        <div className="col-sm-8 divinput">
                        <select name="favoriteColor" component="select" className="input_user">
                            <option>Slect Country</option>
                            { countries.length > 0 &&  
                            countries.map((elem, index) => <option key={index} value={elem.name}>{elem.name}</option>) }
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
