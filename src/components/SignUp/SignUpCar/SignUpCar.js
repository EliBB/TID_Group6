import React from 'react';
import './SignUpCar.css';
import BtnLink from "../../smallComponents/BtnLink"

function SignUpCar(){
    return(
        <div className = "carSignUp-container">
            <h1>Sign Up</h1>

            <div className = "trans-container">
                <h1 className="t-header">Transportation</h1>

                <div className = "button-container">
                    <BtnLink actionBtn="No car" link="/NoCar"></BtnLink>

                    <BtnLink actionBtn="Register car" link="/RegisterCar"></BtnLink>
                </div>
            </div>
        </div>

    );
}

export default SignUpCar;