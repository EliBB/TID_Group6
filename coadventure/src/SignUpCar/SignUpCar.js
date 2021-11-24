import React from 'react';

import NoCar from './NoCar/NoCar';
import './SignUpCar.css';

function SignupCar(){
    return(
        <div className = "carSignUp-container">
            <header className="big-header">
                <p>Sign Up</p>
            </header>
            <div className = "trans-container">
                <header className="trans-header">
                    <p>Transportation</p>
                </header>

                <div className = "button-container">
                    <div className="car-row">
                        <div className="car-button">
                            <p>No car to register</p>
                        </div>
                    </div>

                    <div className="car-row">
                        <div className="car-button">
                            <p> Register car</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignupCar;