import React, { useState } from "react";
import './SignUp.css';

function SignUp(){
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phone:"",
        age:""

    });

    function handleChange(event){
        setUser(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
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
                                value={user.firstname}
                                onChange={handleChange}
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
                                value={user.lastname}
                                onChange={handleChange}
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
                                value={user.address}
                                onChange={handleChange}
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
                                value={user.email}
                                onChange={handleChange}
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
                                value={user.phone}
                                onChange={handleChange}
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
                                value={user.age}
                                onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row-item">
                            <div className="row-name"> 
                                <p>Choose role</p>
                            </div> 
                            <div>
                                <label htmlFor="role">
                                    <select>
                                        <option value="Organizer">Organizer</option>
                                        <option value="Member">Member</option>
                                    </select>
                                </label>
                                
                            </div>
                        </div>

                    </div>

                    <div className="button-row">
                        <button id="prev-button" type="submit" >
                            Cancel
                        </button>
                    
                    
                        <button id="next-button" type="submit" onClick={handleSubmit}>
                            Next
                        </button>
                        
                        
                    </div>
                
                

            </form>
        
        </div>
    )
}

export default SignUp;