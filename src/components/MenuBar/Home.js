import React from 'react';
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import Login from '../Login/Login';

function Home(){
    const navigate = useNavigate(); 
    const currentUser = Parse.User.current(); 
    
    if(currentUser){   
        navigate("/profile")
    } return(
        <Login/>
    )
    } 

export default Home;