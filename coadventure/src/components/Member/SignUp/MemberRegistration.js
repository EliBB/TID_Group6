import React, { useState } from "react";
import './MemberRegistration.css';

function MemberRegistration(){
    return(
        <div className="signUp-container">
            <form className="form">
                <div className="header">
                    <p>Your Informations</p>
                </div>

                    <div className="signUp-row">
                        <div className="row-item">
                            <div className="row-name"> 
                                <p>First name</p>
                            </div> 
                            <div >
                                <label htmlFor="firstname"></label>
                                <input type="text" required
                                className="input-field"
                                id="firstname"
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>Last name</p>
                            </div> 
                            <div>
                                <label htmlFor="LastName"></label>
                                <input type="text" required
                                className="input-field"
                                id="lastname"
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>Address</p>
                            </div> 
                            <div>
                                <label htmlFor="Address"></label>
                                <input type="text" required
                                className="input-field"
                                id="address"
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>E-mail</p>
                            </div> 
                            <div>
                                <label htmlFor="email"></label>
                                <input type="email" required
                                className="input-field"
                                id="email"
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>Phone</p>
                            </div> 
                            <div>
                                <label htmlFor="Phone"></label>
                                <input type="number" required
                                className="input-field"
                                id="phone"
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>Age</p>
                            </div> 
                            <div>
                                <label htmlFor="Age"></label>
                                <input type="number" required
                                className="input-field"
                                id="age"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="button-row">
                        <button id="prev-button" type="submit" >
                            Cancel
                        </button>
                    
                    
                        <button id="next-button" type="submit" >
                            Next
                        </button>
                        
                        
                    </div>
                
                

            </form>
        
        </div>
    )
}

export default MemberRegistration;