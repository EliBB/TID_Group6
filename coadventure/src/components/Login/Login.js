import React, { useState } from "react";
import './Login.css';

import { Link } from 'react-router-dom';
import Parse from 'parse';
import SignUp from "../SignUp/SignUp";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        const user = new Parse.User();
        user.setPassword(password);
        user.setUsername(email);
        user.logIn().then((loggedInUser) => {
          console.log(loggedInUser);
        });
    }

    function handleEmail(event){
        event.preventDefault();
        setEmail(event.target.value);
    }

    function handlePassword(event){
        event.preventDefault();
        setPassword(event.target.value);
    }

    return(
    <div className="container">
    <form className="login-container" >
        
            <div className="login-row" id="header-row">
                <h1>Login</h1>
            </div>

            <div className="login-row">
                <label>
                    <h2>E-mail</h2>
                    <input 
                    className="input-field"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    />
                </label>
            </div>

            <div className="login-row">
                <label>
                    <h2>Password</h2>
                    <input 
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={handlePassword} />
                </label>
            </div>
        

            <div className="login-row" id="button-row">                    
                <div className="login-row" id="button-row">
                <Link to="/signUp">
                    <button type="button" className="white-btn"> 
                        Sign up
                    </button>
                </Link>
                 

                <Link to="/Profile">
                    <button onClick={handleSubmit} type="submit" className="green-button">
                        Login
                    </button> 
                </Link>
                </div>
            </div>

        
    </form>
    </div>
    )
}

export default Login;