import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import SignUp from "../SignUp/SignUp";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
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
    <form onSubmit={handleSubmit} className="login-container" >
        
            <div className="login-row" id="header-row">
                <p className="header1" >Login</p>
            </div>

            <div className="login-row">
                <label>
                    <p className="header2">E-mail</p>
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
                    <p className="header2">Password</p>
                    <input 
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={handlePassword} />
                </label>
            </div>
        

            <div className="login-row" id="button-row">
                <Link to="/signUp">
                    <button type="button" className="white-btn"> 
                        Sign up
                    </button>
                </Link>
                 

                <button type="submit" className="green-btn">
                    Login
                </button> 
            </div>

        
    </form>
    </div>
    )
}

export default Login;