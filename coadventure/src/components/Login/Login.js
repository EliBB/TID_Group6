import React, { useState } from "react";
import './Login.css';


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
                <button type="submit" className="green-button" onClick={handleSubmit}>
                    Login
                </button> 
            </div>

        
    </form>
    </div>
    )
}

export default Login;