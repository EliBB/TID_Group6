import React from "react";
import Parse from "parse";
import '../SignUp.css';
import BtnDelete from '../../smallComponents/BtnDelete'
import InputForm from "../InputForm";
import DutyPriorityForm from "../../smallComponents/DutyPriorityForm";
import PageHeader from "../../smallComponents/PageHeader";
import BackButton from "../../smallComponents/Buttons/BackButton";
import NextButton from "../../smallComponents/Buttons/NextButton";
import GreenButton from "../../smallComponents/Buttons/GreenButton";

function AddFamily ({
    goNextStep, 
    goBackStep, 
    handleData, 
    familyInput,
    setFamilyInput
    }){
    

    async function addFamilyMembers(){
        const familyMembers = Parse.Object.extend("FamilyMembers");
        const currentUser = Parse.User.current();

        const newFamilyMembers = new familyMembers();
        newFamilyMembers.set("familyFirstname", familyInput.familyFirstname);
        newFamilyMembers.set("familyAge", familyInput.familyAge);
        newFamilyMembers.set("memberRelation", currentUser)


        try{
            let result = await newFamilyMembers.save()
            console.log("Family members added" + result.id)
            goNextStep();
        } catch (error) {
            alert ("Error " + error.message)
        }
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    function addNewFamilyMember(){
        setFamilyInput([...familyInput, {familyFirstname: "", familyAge:""}])
        console.log("add new member clicked")
    }

    function deleteFamilyMember(){
        console.log("member deleted")
    }

    return(
        <div className="container">
            <PageHeader
            pageTitle="Add Family Members"
            />
            
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="info-container">
                    <div className="col-row"> 
                        <InputForm
                            title="First name"
                            type="text" 
                            name="familyFirstname"
                            value={familyInput.familyFirstname}
                            onChange={handleData("familyFirstname")} 
                        />

                        <InputForm
                            title="Age"
                            type="number" 
                            name="familyAge"
                            value={familyInput.familyAge}
                            onChange={handleData("familyAge")}
                        />
                    </div>

                    <div className="info-col">
                        <h2>Duty Priorities</h2>
                        <DutyPriorityForm/>
                    </div>
                </div>

                <br/>
                <hr className="horizontal-line"></hr>
                <br/>

                <div className="add-button">
                    <GreenButton text="Add new family member" onClick={addNewFamilyMember}/>
                    <BtnDelete onClick={deleteFamilyMember}/>
                    
                </div>

                <div className="button-row">
                    <BackButton onClick={goBackStep}/>
                    <NextButton onClick={addFamilyMembers}/> 
                </div>
            </form>
        </div>
    )
}

export default AddFamily;