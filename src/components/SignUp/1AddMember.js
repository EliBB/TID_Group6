import React from "react";
import './SignUp.css';
import Parse from "parse";

function AddMember ({
    goNextStep, 
    goBackStep, 
    handleData, 
    memberInput}) {

    async function createExcursionSignedUp(){
        const ExcursionSignedUp = Parse.Object.extend("ExcursionSignedUp");
        
        const memberSignedUp = new ExcursionSignedUp();
        memberSignedUp.set("memberFirstname", memberInput.memberFirstname);
        memberSignedUp.set("lastname", memberInput.lastname)
        memberSignedUp.set("address", memberInput.address)
        memberSignedUp.set("email", memberInput.email)
        memberSignedUp.set("phone", memberInput.phone)
        memberSignedUp.set("memberAge", memberInput.memberAge)

        await memberSignedUp.save()
        .then((memberSignedUp) => {
            goNextStep();
            console.log("New member signed to excursion " + memberSignedUp)
        }, (error) => {
            alert ("Error " + error.message)
        });
    }

    function handleSubmit(event){
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

                <div className="button-row">
                    <button className="green-button" onClick={goBackStep}>
                        Cancel
                    </button>
                    
                    <button className="green-button" type="submit" onClick={createExcursionSignedUp}>
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddMember;
