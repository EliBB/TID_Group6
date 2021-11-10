import React from 'react';
import AddFamilyForm from './AddMemberForm';
import { Link } from 'react-router-dom';


function AddMembers(){
    
    return(
        <div className="signUp-container">
            <AddFamilyForm/>

            <div className="addMembersBtn">
                <button id="addMembersBtn" type="button" onClick={AddFamilyForm}>
                    <p>Add family member</p>
                </button>
            </div>

            <div className="button-row">
                <Link to="/member" >
                    <button id="prev-button" type="button" >
                        Back
                    </button>
                </Link>
            
                <Link to="/" >
                    <button id="next-button" type="submit" >
                        Next
                    </button>
                </Link>  
            </div>

        </div>
    )
}

export default AddMembers;