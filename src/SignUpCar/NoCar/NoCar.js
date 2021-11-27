import React from 'react';
import './NoCar.css';
import BtnLink from '../../components/smallComponents/BtnLink';

function NoCar(){
    return(
        <div className="no-car-container">
            <h1>Sign Up</h1>

            <div className = "trans-container">
                <div className="trans-paragraph">
                    <h2 className="text-nocar">1 people needs car seats. </h2>
                    <h2 className="text-nocar">You will recieve an e-mail after the deadline about booking car seats</h2>
                </div>

                <div className = "button-container">
                    <BtnLink actionBtn="Back" link="/"></BtnLink>

                    <BtnLink actionBtn="Confirm" link="/"></BtnLink>
                </div>
            </div>
        </div>
    )
}

export default NoCar;