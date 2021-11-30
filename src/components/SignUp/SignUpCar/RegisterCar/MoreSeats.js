import React from "react";
import "../NoCar/NoCar.css";
import BtnLink from "../../components/smallComponents/BtnLink";

function MoreSeats(){
    return(
        <div className="no-car-container">
            <h1>Sign Up</h1>

            <div className = "trans-container">
                <div className="trans-paragraph">
                    <h2 className="text-nocar">In need of more seats? </h2>
                    <h2 className="text-nocar">Book extra car seats.</h2>
                </div>

                <div className = "button-container">
                    <BtnLink actionBtn="i'm fine'" link="/"></BtnLink>

                    <BtnLink actionBtn="Yes, book seats" link="/"></BtnLink>
                </div>
            </div>
        </div>
    )
}

export default MoreSeats;