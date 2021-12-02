import React, { useState } from "react";
import { useNavigate } from 'react-router';
import Parse from 'parse';
import './Login.css';
import InputForm from "../SignUp/InputForm";

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
        <h1>Login</h1>
        <form className="input-form">
            <InputForm
                title="E-mail"
                type="email"
                value={email}
                onChange={handleEmail} 
            />

            <InputForm
                title="Password"
                type="password"
                value={password}
                onChange={handlePassword} 
            />   

            <div className="submit-button">                    
                <button onClick={handleSubmit} type="submit" className="green-button">
                    <p>Login</p>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Login;