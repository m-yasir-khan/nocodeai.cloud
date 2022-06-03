import React, { useState } from 'react'
import './style.css'
const LogIn = () => {
    const [signupMode, setSignupMode] = useState('sign-up-mode')
    const [loginMode, setLoginMode] = useState('');

    const signupa = () => {
        setLoginMode('')
    }
    const signupb = () => {
        console.log("hello")
    }

    return (
        <div>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-up-mode sign-in-form">
                            <h2 className="sign-up-mode title">Sign in</h2>
                            <div className="sign-up-mode input-field">
                                <i className="sign-up-mode fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="sign-up-mode input-field">
                                <i className="sign-up-mode fas fa-lock"></i>
                                <input type="password" placeholder="Password" />

                            </div>
                            {/* <input type="submit" value="Login" className="sign-up-mode btn solid" /> */}
                            <button className="sign-up-mode btn" onClick={signupa} >Login</button>
                            <p className="sign-up-mode social-text">Or Sign in with social platforms</p>
                            <div className="sign-up-mode social-media">
                                {/* <a href="#" className="sign-up-mode social-icon">
                                    <i className="sign-up-mode fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="sign-up-mode social-icon">
                                    <i className="sign-up-mode fab fa-twitter"></i>
                                </a>
                                <a href="#" className="sign-up-mode social-icon">
                                    <i className="sign-up-mode fab fa-google"></i>
                                </a>
                                <a href="#" className="sign-up-mode social-icon">
                                    <i className="sign-up-mode fab fa-linkedin-in"></i>
                                </a> */}
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                                <button className="btn" onClick={signupa} >CONSOLE</button>
                            </div>

                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                {/* <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a> */}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className={`btn transparent ${signupMode}`} onClick={signupb} id="sign-up-btn">
                                Sign up CLICK
                            </button>
                        </div>
                        <img src="./img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className={`btn transparent ${loginMode}`} onClick={signupa} id="sign-in-btn">
                                Sign in CLICK
                            </button>
                        </div>
                        <img src="./img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LogIn