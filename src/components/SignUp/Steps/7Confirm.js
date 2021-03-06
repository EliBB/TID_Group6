import React from "react";
import '../SignUp.css';
import PageHeader from "../../smallComponents/PageHeader";
import GreenButton from "../../smallComponents/Buttons/GreenButton";
import BackButton from "../../smallComponents/Buttons/BackButton";

const Confirm = ({memberInput, familyInput, carInput, seatInput, goBackStep, confirm}) => {
    const {memberFirstname, lastname, address, email, phone, memberAge} = memberInput;
    const {familyFirstname, familyAge} = familyInput;
    const {licensePlate, color, carType, numberOfFreeSeats} = carInput;
    const {neededSeats} = seatInput;

    return(
        <div className="container">
            <PageHeader
                pageTitle="Your registration"
            />
            <div className="info-box-container">
                
                <div className="confirm-info">
                    <div className="confirm-info-row">
                        <h2>Your information</h2>
                        <div className="confirm-details">
                            <h3>First name</h3> {memberFirstname}
                            <h3>Last name</h3> {lastname}
                            <h3>Address</h3> {address}
                            <h3>E-mail</h3> {email}
                            <h3>Phone</h3> {phone}
                            <h3>Age</h3> {memberAge}
                        </div>
                    </div>

                    <div className="confirm-info-row">
                        <h2>Your familiy members</h2>
                        <div className="confirm-details">
                            <h3>First name</h3> {familyFirstname}
                            <h3>Age</h3> {familyAge}
                        </div>
                    </div>
                    
                    <div className="confirm-info-row">
                        <h2>Transportation</h2>
                        <div className="confirm-details">
                            <h3>You have registered car(s):</h3> 
                            <p> {licensePlate} - {color} - {carType} </p>
                            <h3>You have {numberOfFreeSeats} available seat(s)</h3>
                            <h3>You are in need of {neededSeats} number of additional seats</h3>
                            <h3>You will recieve an e-mail when the car seat reservation is open.</h3>
                        </div>
                    </div>
                </div>

                <div className="button-row">
                    <GreenButton text="Confirm" onClick={confirm}/>
                </div>
                
                <BackButton text="Back" onClick={goBackStep}/>
            </div>
            
        </div>
    )
}

export default Confirm;