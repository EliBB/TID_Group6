import React from "react";
import './SignUp.css';

const Step2 = ({goNextStep, goBackStep, handleData, input}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

  /*   function addNewFamilyMember(){
        setFamilyMember([...familyMember, {firstname:"", age:""}])
    }
 */

    return(
        <div className="placeholder">
            <h1>Add Members</h1>

            <form className="signUp-form" onSubmit={handleSubmit}>
                <div className="info-container">
                    <div className="info-row"> 
                        <div className="signUp-row">
                            <label>
                                <h2>First name</h2>
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
                                <h2>Age</h2>
                                <input className="input-field"
                                type="number" 
                                name="age"
                                value={input.age}
                                onChange={handleData("age")}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="dutyPriorities">
                        <h2>Duty Priorities</h2>
                    </div>
                </div>

                <hr className="horizontal-line"></hr>

                <div className="add-button">
                    <button className="green-button" /* onClick={addNewFamilyMember} */>
                        Add family member
                    </button>
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

export default Step2;