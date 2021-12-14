import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
import  SideNav  from './SideNav'
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import validator from 'validator'
import GoogleLogin from 'react-google-login'

const Signin = ({logIn, oneUser}) => {
    const [control, setControl] = useState('')
    const [message, setMessage] = useState('')
    let navigate = useNavigate();
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
    const handleLogin = async (e) => {
        e.preventDefault()
        if(isFormValid()){
            const errors = await logIn(user)
            if(errors === undefined){
                // console.log('Bienvenido......')

            //    return navigate('/')
            }else{
                setControl(false)
                setMessage(errors.errors[0].message)
                // errors.errors.map(e => console.log(errors.errors[0].message))
            }
        }
    }
    const isFormValid = () => {
        if(!validator.isEmail(user.email)){
            setControl('uno')
            return false
        }else if(user.password.length < 5){
            setControl('dos')
            return false
        }
        
        return true
    }
    const handleControl = (e) => {
        setControl(null)
        setMessage('')
    }
    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
        }
        logIn(googleUser)
        .then((res) => res.dat.success)
        .catch((err) => console.log(err))
       
    }   
 console.log(oneUser.userExists?.urlphoto)
// console.log(oneUser.userExists?.email.length)
// console.log(oneUser)
   return (
  <div>
    <SideNav name={ oneUser.userExists?.name } urlphoto={ oneUser.userExists?.urlphoto }/>
        <div className="container_form">
            <div className="col-sm-5 col-xs-12 div_error animate__fadeInDown" ><span>{ message }</span></div>
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
                                placeholder= {control === 'uno' ? 'email is required' : 'Email'}
                                style={{
                                    backgroundColor: control === 'uno' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: control === 'uno' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleControl}
                            />
                        </div>
                        <div className="col-sm-8">
                            <input 
                                type="password" 
                                className="input_user" 
                                onChange={ handleInputChange }
                                placeholder="Password" 
                                name="password" 
                                placeholder= {control === 'dos' ? 'email is required' : 'Password'}
                                style={{
                                    backgroundColor: control === 'dos' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                    borderColor: control === 'dos' ? 'red' : 'rgba(241, 205, 157, 0.596)',
                                }}
                                onClick={handleControl}
                            />
                        </div>
                    </div>
                    <div className="row div_btns">
                        <div className="col-sm-8 col-xs-12"><button type="submit" className="btn_signin">Sign In</button></div>
                        <div className="col-sm-8 col-xs-12 div_a_sign"> <span className="psw">You do not have an account ? <Link to="/signup">Sign up here !</Link></span></div>
                        <div className="col-sm-8 col-xs-12">
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
    // console.log(state)
        return {
            oneUser: state.authReducer.oneUser,
        }
    }
    const mapDispatchToProps = {
        logIn: authActions.logIn
    }
 export default connect(mapStateToProps, mapDispatchToProps)(Signin)