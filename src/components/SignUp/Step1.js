import React from "react";
import './SignUp.css';


const Step1 = ({goNextStep, goBackStep, handleData, input}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="placeholder">
            <h1>Your informations</h1>
            
            <form className="signUp-form" onSubmit={handleSubmit}> 
                <div className="signUp-row">
                    <label> 
                        <h3>First name</h3>
                            <input className="input-field"
                            type="text" 
                            name="firstname"
                            value={input.firstname}
                            onChange={handleData("firstname")}
                            />
                    </label>  
                </div>
                    

                <div className="signUp-row">
                    <label> 
                        <h3>Last name</h3>
                            <input className="input-field"
                            type="text" 
                            name="lastname"
                            value={input.lastname}
                            onChange={handleData("lastname")}
                            />
                    </label>  
                </div>

                <div className="signUp-row">
                    <label> 
                        <h3>Adress</h3>
                            <input className="input-field"
                            type="text" 
                            name="adress"
                            value={input.adress}
                            onChange={handleData("adress")}
                            />
                    </label>  
                </div>

                <div className="signUp-row">
                    <label>
                        <h3>E-mail</h3>
                            <input className="input-field"
                            type="email" 
                            name="email"
                            value={input.email}
                            onChange={handleData("email")}
                            />
                    </label>
                </div>

                <div className="signUp-row">
                    <label>
                        <h3>Phone number</h3>
                            <input className="input-field"
                            type="number" 
                            name="phone"
                            value={input.phone}
                            onChange={handleData("phone")}
                            />
                    </label>
                </div>

                <div className="signUp-row">
                    <label>
                        <h3>Age</h3>
                            <input className="input-field"
                            type="number" 
                            name="age"
                            value={input.age}
                            onChange={handleData("age")}
                            />
                    </label>
                </div>

                <div className="signUp-row">
                    <label>
                        <h3>Your role</h3>
                        <select className="select-form" name="role" onChange={handleData("role")} value={input.role}>
                            <option value={input.role}>Organizer</option>
                            <option value={input.role}>Member</option>
                        </select>
                    </label>
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
