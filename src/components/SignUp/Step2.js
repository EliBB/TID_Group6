import React from "react";
import './SignUp.css';

const Step2 = ({goNextStep, goBackStep, handleData, familyInput}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

  /*   function addNewFamilyMember(){
        setFamilyMember([...familyMember, {familyFirstname:"", familyAge:""}])
    }
 */

    return(
        <div className="placeholder">
            <div className="header-row">
                <h1>Add Members</h1>
            </div>
            

            <form className="signUp-form" onSubmit={handleSubmit}>
                <div className="info-container">
                    <div className="col-row"> 
                        <div className="signUp-row">
                            <h2>First name</h2>
                            <label>
                                <input className="input-field"
                                type="text" 
                                name="familyFirstname"
                                value={familyInput.familyFirstname}
                                onChange={handleData("familyFirstname")} 
                                />
                            </label>
                        </div>

                        <div className="signUp-row">
                            <h2>Age</h2>
                            <label>
                                <input className="input-field"
                                type="number" 
                                name="familyAge"
                                value={familyInput.familyAge}
                                onChange={handleData("familyAge")}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="info-col">
                        <h2>Duty Priorities</h2>
                        
                    </div>
                </div>

                <br/>
                <hr className="horizontal-line"></hr>
                <br/>

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