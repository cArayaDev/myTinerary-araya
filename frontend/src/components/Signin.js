import React from 'react'
import { Footer } from './Footer'
import { SideNav } from './SideNav'

export const Signin = () => {
    return (
        <div>
            <SideNav />
            <div className="container_form">
                <div className="row fondo_form">
                    <h2>Sign in</h2>
                    <form className="">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn_signin">Sign In</button>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
