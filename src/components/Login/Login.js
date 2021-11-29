import React, { useState } from "react";
import { useNavigate } from 'react-router';
import Parse from 'parse';
import './Login.css';

function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        console.log("login clicked")

        const user = new Parse.User();
        user.setPassword(password);
        user.setUsername(email);

        user.logIn().then(() => {
          navigate("/profile")
        });
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    return(
    <div className="container">
        <form className="login-container">
            <div className="header">
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
                    <input className="input-field"
                    type="password"
                    value={password}
                    onChange={handlePassword} 
                    />
                </label>
            </div>
        

            <div className="button">                    
                <button onClick={handleSubmit} type="submit" className="green-button">
                    <p>Login</p>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Login;