import React, { useState } from 'react'
import './style.css'
const LogIn = () => {
    const [signupMode, setSignupMode] = useState('no_class')
    const [name_user, setName_user] = useState("");
    const [email_user, setEmail_user] = useState("");
    const [description_user, setDescription_user] = useState("");
    const [password, setPassword] = useState("");
    const go_to_login = () => {
        setSignupMode("no_class")
    }
    const go_to_signup = () => {
        setSignupMode("sign-up-mode")
    }

    return (
        <div>
            <div className={`login_container ${signupMode}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-up-mode sign-in-form">
                            <h2 className="sign-up-mode title">Sign in</h2>
                            <div className="sign-up-mode input-field">
                                <i ></i>
                                <input type="text" placeholder="Email" value={email_user} onChange={(ev) => { setEmail_user(ev.target.value) }} />
                            </div>
                            <div className="sign-up-mode input-field">
                                <i ></i>
                                <input type="password" placeholder="Password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} />
                            </div>
                            <button className="sign-up-mode btn" onClick={() => {
                                let data = {
                                    email_user: email_user,
                                    password: password
                                }
                                console.log(data)
                            }} >Login</button>
                            <p className="sign-up-mode social-text">Or Sign in with social platforms</p>

                        </form>
                        <form className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i ></i>
                                <input type="text" placeholder="Username" value={name_user} onChange={(ev) => { setName_user(ev.target.value) }} />
                            </div>
                            <div className="input-field">
                                <i ></i>
                                <input type="text" placeholder="Email" value={email_user} onChange={(ev) => { setEmail_user(ev.target.value) }} />
                            </div>
                            <div className="input-field">
                                <i ></i>
                                <input type="text" placeholder="Discription" value={description_user} onChange={(ev) => { setDescription_user(ev.target.value) }} />
                            </div>
                            <div className="input-field">
                                <i ></i>
                                <input type="password" placeholder="Password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} />
                            </div>
                            <button className="sign-up-mode btn" onClick={() => {
                                let data = {
                                    name_user:name_user,
                                    email_user: email_user,
                                    password: password,
                                    description_user:description_user
                                }
                                console.log(data)
                            }} >Sign Up</button>
                            <p className="social-text">Or Sign up with social platforms</p>
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
                            <button className={`btn transparent `} onClick={go_to_signup} id="sign-up-btn">
                                Signup
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
                            <button className={`btn transparent`} onClick={go_to_login} id="sign-in-btn">
                                Signin
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