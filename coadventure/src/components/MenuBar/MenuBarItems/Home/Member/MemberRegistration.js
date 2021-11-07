import React, { useState } from "react";

function MemberRegistration(){
/*     const [status, setStatus] = useState("Submit");
 */
    function handleSubmit(event){
        event.preventDefault();
        alert("Sign up is registred ")
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="signUp-container">
                <h1>Your Informations</h1>

                <div className="signUp-row">
                    
                    <div className="row-name"> 
                        <h6>First name</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="FirstName">First name</label>
                        <input type="text" required/>
                    </div>

                    <div className="row-name"> 
                        <h6>Last name</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="LastName">Last name</label>
                        <input type="text" required/>
                    </div>

                    <div className="row-name"> 
                        <h6>Address</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="Address">Address</label>
                        <input type="text" required/>
                    </div>

                    <div className="row-name"> 
                        <h6>E-mail</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="E-mail">E-mail</label>
                        <input type="email" required/>
                    </div>

                    <div className="row-name"> 
                        <h6>Phone</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="Phone">Phone</label>
                        <input type="number" required/>
                    </div>

                    <div className="row-name"> 
                        <h6>Age</h6>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="Age">Age</label>
                        <input type="number" required/>
                    </div>

                </div>

                <div className="signUp-row">
                    <button className="signUp-button" type="submit">
                        Next
                    </button>
                </div>
            
            </div>

        </form>
    )
}

export default MemberRegistration;