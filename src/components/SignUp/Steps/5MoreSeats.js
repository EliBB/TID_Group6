import React from "react";
import '../SignUp.css';
import BackButton from "../../smallComponents/Buttons/BackButton";
import GreenButton from "../../smallComponents/Buttons/GreenButton";
import PageHeader from "../../smallComponents/PageHeader";

function MoreSeats({
    skipStep,
    goNextStep,
    goBackStep
}){
    return(
        <div className="container">
        <PageHeader
        pageTitle="Book extra car seats"
        />
        <div className="info-box-container">
           
            <div className="info-box">
                <div className="info-box-row">
                    <h2>Do you need extra car seats?</h2>
                </div>

                <div className="info-box-row">
                    <GreenButton text="I'm fine" onClick={skipStep}/>
                    <GreenButton text="Yes, book seats" onClick={goNextStep}/>
                </div>
            </div>
            
            <div className="single-button-row">
                <BackButton onClick={goBackStep}/>
            </div>
                    
        </div>
        </div>
    )
}

export default MoreSeats;