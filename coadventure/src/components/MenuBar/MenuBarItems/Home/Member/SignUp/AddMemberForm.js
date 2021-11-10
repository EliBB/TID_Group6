import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


function AddFamilyForm(){
    return(
        
        <div className="addMembers-container"> 
            <div className="signUp-col" id="col1">
                <p className="text"> You: </p>
            </div>
            
            <div className="signUp-col" id="col2">
                <form className="form">
                    <div className="col-name"> 
                        <p>First name</p>
                    </div> 
                    <div>
                    <label htmlFor="firstname"></label>
                        <input type="text" required
                        className="input-field"
                        id="firstname"
                    />
                    </div>
            
                    <div className="col-name"> 
                        <p>Age</p>
                    </div> 
                    <div>
                        <label htmlFor="Age"></label>
                        <input type="number" required
                        className="input-field"
                        id="age"
                        />
                    </div>
                </form>
            </div>
            
            <div className="signUp-col" id="col3">
                <p>Duty Priorities</p>
            </div>
        </div> 
          
    )
}

export default AddFamilyForm;