import React, {useState} from "react";
import Parse from "parse";
import {useNavigate} from 'react-router-dom';
import './Login.css';
import InputForm from "../SignUp/InputForm";

function Register(){
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();


    async function createUser(e){     
        e.preventDefault();   
        const user = new Parse.User();
        user.setUsername(username);
        user.setUsername(firstname)
        user.setEmail(email);
        user.setPassword(password);
        user.set("role", role)
        
        try{
            await user.signUp(); 
            navigate("/Profile")          
        } catch (error){
            alert("Error " + error.message)
        } 
    }   

    function usernameChange(event){
        setUsername(event.target.value);
    }

    function firstnameChange(event){
        setFirstname(event.target.value);
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

    return(
    <div className="container">
        <h1>Register</h1>
        <form className="input-form">
            <InputForm
                title="User name"
                type="text"
                value={username}
                onChange={usernameChange}
            />

            <InputForm
                title="First name"
                type="text"
                value={firstname}
                onChange={firstnameChange}
            />
        
            <InputForm
                title="E-mail"
                type="email"
                value={email}
                onChange={emailChange}
            />

            <InputForm
                title="Password"
                type="password"
                value={password}
                onChange={passwordChange}
            />

            <div className="input-row">
                <h2>Your role</h2>
                <div className="input-role-row">
                    <label  className="input-role-col">
                        <input
                        type="radio"
                        value="Member"
                        onChange={roleChange}
                        checked={role === 'Member'}
                        />
                        <h2>Member</h2>
                    </label>
                    
                    <label  className="input-role-col">
                        <input
                        type="radio"
                        value="Organizer"
                        onChange={roleChange}
                        checked={role === 'Organizer'}
                        />
                        <h2>Organizer</h2>
                    </label>
                </div>
            </div>


            <div className="submit-button">
                <button onClick={createUser} className="green-button">
                    <p>Create user</p>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Register;