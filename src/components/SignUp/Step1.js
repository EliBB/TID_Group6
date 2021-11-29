import React from "react";
import './SignUp.css';


const Step1 = ({goNextStep, goBackStep, handleData, memberInput}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="placeholder">
            <div className="header-row">
                <h1>Your informations</h1>
            </div>

            <form className="signUp-form" onSubmit={handleSubmit}> 
                <div className="signUp-row">
                    <h3>First name</h3>
                    <label> 
                        <input className="input-field"
                        type="text" 
                        name="memberFirstname"
                        value={memberInput.memberFirstname}
                        onChange={handleData("memberFirstname")}
                        />
                    </label>  
                </div>
                    

                <div className="signUp-row">
                    <h3>Last name</h3>
                    <label> 
                        <input className="input-field"
                        type="text" 
                        name="lastname"
                        value={memberInput.lastname}
                        onChange={handleData("lastname")}
                        />
                    </label>  
                </div>

                <div className="signUp-row">
                    <h3>Address</h3>
                    <label> 
                        <input className="input-field"
                        type="text" 
                        name="adress"
                        value={memberInput.address}
                        onChange={handleData("address")}
                        />
                    </label>  
                </div>

                <div className="signUp-row">
                    <h3>E-mail</h3>
                    <label>
                        <input className="input-field"
                        type="email" 
                        name="email"
                        value={memberInput.email}
                        onChange={handleData("email")}
                        />
                    </label>
                </div>

                <div className="signUp-row">
                    <h3>Phone number</h3>
                    <label>
                        <input className="input-field"
                        type="number" 
                        name="phone"
                        value={memberInput.phone}
                        onChange={handleData("phone")}
                        />
                    </label>
                </div>

                <div className="signUp-row">
                    <h3>Age</h3>
                    <label>
                        <input className="input-field"
                        type="number" 
                        name="memberAge"
                        value={memberInput.memberAge}
                        onChange={handleData("memberAge")}
                        />
                    </label>
                </div>

                <div className="signUp-row">
                    <h3>Your role</h3>
                    <div className="select-form">
                        <label>
                            <input 
                                type="radio" 
                                value={memberInput.role} 
                                name="role"
                                onChange={handleData("role")}
                                checked={true}/> 
                                Member
                        </label>

                        <label>
                            <input 
                                type="radio" 
                                value={memberInput.role} 
                                name="role"
                                onChange={handleData("role")}/>
                                Organizer 
                        </label>
                    </div>
                </div>

                <div className="button-row">
                    <button className="green-button" onClick={goBackStep}>
                        Cancel
                    </button>
                    
                    <button className="green-button" type="submit" onClick={goNextStep}>
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Step1;
