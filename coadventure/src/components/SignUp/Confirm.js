import React from "react";

const Confirm = ({input, goBackStep}) => {
    const {firstname, lastname, address, email, phone, age, role} = input;
    
    return(
        <div className="placeholder">
            <h1>Your registration</h1>
            <div className="signUp-form">
                <h3>First name</h3> {firstname}
                <h3>Last name</h3> {lastname}
                <h3>Address</h3> {address}
                <h3>E-mail</h3> {email}
                <h3>Phone</h3> {phone}
                <h3>Age</h3> {age}
                <h3>Role</h3> {role}
           

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