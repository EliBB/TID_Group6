import React from 'react';
import './NoCar.css';

function NoCar(){
    return(
        <div className = "carSignUp-container">
            <header className="big-header">
                <p>Sign Up</p>
            </header>
            <div className = "trans-container">
                <div className="trans-p">
                    <p>1 people needs car seats. </p>
                    <p>You will recieve an e-mail after the deadline about booking car seats</p>
                </div>

                <div className = "button-container">
                    <div className="button-row">
                        <div className="back-button">
                            <p>Back</p>
                        </div>
                    </div>

                    <div className="button-row">
                        <div className="confirm-button">
                            <p>Confirm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoCar;