import React from "react";

const Confirm = ({memberInput, familyInput, goBackStep}) => {
    const {memberFirstname, lastname, address, email, phone, memberAge, role} = memberInput;
    const {familyFirstname, familyAge} = familyInput;

    return(
        <div className="placeholder">
            <div className="header-row">
                <h1>Your registration</h1>
            </div>
            <div className="signUp-form">
                <h2>Your information</h2>
                    <h3>First name</h3> {memberFirstname}
                    <h3>Last name</h3> {lastname}
                    <h3>Address</h3> {address}
                    <h3>E-mail</h3> {email}
                    <h3>Phone</h3> {phone}
                    <h3>Age</h3> {memberAge}
                    <h3>Role</h3> {role}

                <h2>Your familiy members</h2>
                    <h3>First name</h3> {familyFirstname}
                    <h3>Age</h3> {familyAge}
           

                <div className="button-row">
                    <button className="green-button" onClick={goBackStep}>
                        Cancel
                    </button>

                    <button className="green-button" type="submit" >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Confirm;