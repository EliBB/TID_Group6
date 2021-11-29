import React, {useState} from "react";
import Parse from "parse";
import {useNavigate} from 'react-router-dom';
import './Login.css';

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();


    async function createUser(){
        const user = new Parse.User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        user.set("role", role)
        
        try{
            await user.signUp();
            console.log("User registred" + username + email + role)
        } catch (error){
            alert("Error " + error.message)
        }
        navigate("/profile")
    }

    function usernameChange(event){
        setUsername(event.target.value);
    }

    function emailChange(event){
        setEmail(event.target.value);
    }

    function passwordChange(event){
        setPassword(event.target.value);
    }

    function roleChange(event){
        setRole(event.target.value);
    }

    /* function handleSubmit(event){
        event.preventDefault();
    } */

    return(
    <div className="container">
        <form className="login-container" /* onSubmit={handleSubmit} */>
            <div className="header">
                <h1>Register</h1>
            </div>
        
            <div className="login-row">
                <label>
                    <h2>Username</h2>
                    <input className="input-field"
                    type="text"
                    value={username}
                    onChange={usernameChange}
                    />
                </label>
            </div>

            <div className="login-row">
                <label>
                    <h2>E-mail</h2>
                    <input className="input-field"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={emailChange}
                    />
                </label>
            </div>

            <div className="login-row">
                <label>
                    <h2>Password</h2>
                    <input className="input-field"
                    type="password"
                    value={password}
                    onChange={passwordChange}
                    />
                </label>
            </div>

            <div className="role-row">
                <h2>Your role</h2>
                <label>
                    <input className="input-field"
                    type="radio"
                    value="Member"
                    onChange={roleChange}
                    checked={role === 'Member'}
                    />
                    Member
                </label>
                
                <label>
                    <input className="input-field"
                    type="radio"
                    value="Organizer"
                    onChange={roleChange}
                    checked={role === 'Organizer'}
                    />
                    Organizer
                </label>
            </div>


            <div className="button">
                <button onClick={createUser} className="green-button">
                    <p>Create user</p>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Register;