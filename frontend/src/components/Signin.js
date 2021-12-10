import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { Footer } from './Footer'
import { SideNav } from './SideNav'

export const Signin = () => {
    const [formValues, handleInputChange] = useForm({
        name: 'cristian',
        password: '123'
    })
    const { name, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(name)
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
                        <div className="col-sm-8"><input 
                                                    type="text" 
                                                    className="input_user" 
                                                    value={ name } 
                                                    onChange={ handleInputChange } 
                                                    placeholder="Enter Username" 
                                                    name="name" 
                                                    required />
                        </div>
                        <div className="col-sm-8"><input 
                                                    type="password" 
                                                    className="input_user" 
                                                    value={ password } 
                                                    onChange={ handleInputChange }
                                                    placeholder="Enter Password" 
                                                    name="password" 
                                                    required />
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
