import React from "react";
import Parse from "parse";
import './SignUp.css';
import BtnDelete from '../smallComponents/BtnDelete'

function AddFamily ({
    goNextStep, 
    goBackStep, 
    handleData, 
    familyInput,
    }){
    

    async function addFamilyMembers(){
        const familyMembers = Parse.Object.extend("familyMembers");

        const newFamilyMembers = new familyMembers();
        newFamilyMembers.set("familyFirstname", familyInput.familyFirstname);
        newFamilyMembers.set("familyAge", familyInput.familyAge)

        newFamilyMembers.save()
        .then((newFamilyMembers)=>{
            goNextStep();
            console.log("Family members added" + newFamilyMembers)
        }, (error) => {
            alert ("Error " + error.message)
        })
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    function addNewFamilyMember(){
        familyInput([...familyInput, {familyFirstname: "", familyAge:""}])
        console.log("add new member clicked")
    }

    function deleteFamilyMember(){
        console.log("member deleted")
    }

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
                    <button className="green-button" onClick={addNewFamilyMember}>
                        Add new family member
                    </button>
                </div>
            
                <BtnDelete onClick={deleteFamilyMember}
                />

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

export default AddFamily;