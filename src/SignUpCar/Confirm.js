import React from "react";
import "./Confirm.css"

function Confirm(){
    return(
        <div className="confirm-container">
            <h1>Thanks for your registration!</h1>

            <div className="confirmation-info">
                <h3 className="header-confirm">You information</h3>
                <div className="your-info">
                    <p>Name: </p>
                    <p>Address: </p>
                    <p>Email: </p>
                    <p>Number: </p>
                    <p>Age: </p>
                </div>

                <h3 className="header-confirm">Family members</h3>
                <div className="your-info">
                    <p># 1</p>
                    <p>Name: </p>
                    <p>Age: </p>
                    <p># 1</p>
                    <p>Name: </p>
                    <p>Age: </p>
                </div>

                <h3 className="header-confirm">Transportation</h3>
                <div className="your-info">
                    <p>You have registered x cars </p>
                    <p>You have x available seats </p>
                    <p>You are in need of x number of additional seats </p>
                </div>
            </div>

        </div>
    )
}

export default Confirm;