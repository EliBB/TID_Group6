import React from "react";
import '../SignUp.css';
import Parse from "parse";
import InputForm from "../InputForm";
import PageHeader from "../../smallComponents/PageHeader";
import BackButton from "../../smallComponents/Buttons/BackButton";
import NextButton from "../../smallComponents/Buttons/NextButton";

function AddMember ({
    goNextStep, 
    goBackStep, 
    handleData, 
    memberInput}) {

    async function saveNewMember(){
        const member = Parse.Object.extend("Member");
        
        const memberSignedUp = new member();
        memberSignedUp.set("memberFirstname", memberInput.memberFirstname);
        memberSignedUp.set("lastname", memberInput.lastname)
        memberSignedUp.set("address", memberInput.address)
        memberSignedUp.set("email", memberInput.email)
        memberSignedUp.set("phone", memberInput.phone)
        memberSignedUp.set("memberAge", memberInput.memberAge)

        try{
            let result = await memberSignedUp.save()
            console.log("New member created" + result.id)
            goNextStep();
        } catch(error){
            alert("Error " + error.message)
        }
    } 

    function handleSubmit(event){
        event.preventDefault();
    } 

    return(
        <>
            <PageHeader
                pageTitle="Your Informations"
            />

            <form className="input-form" onSubmit={handleSubmit}> 
                <InputForm
                    title="First name"
                    type="text"
                    name="memberFirstname"
                    value={memberInput.memberFirstname}
                    onChange={handleData("memberFirstname")}
                />

                <InputForm
                    title="Last name"
                    type="text"
                    name="lastname"
                    value={memberInput.lastname}
                    onChange={handleData("lastname")}
                />
            
               <InputForm
                    title="Address"
                    type="text"
                    name="adress"
                    value={memberInput.address}
                    onChange={handleData("address")}
                />

                <InputForm
                    title="E-mail"
                    type="email"
                    name="email"
                    value={memberInput.email}
                    onChange={handleData("email")}
                />

                <InputForm
                    title="Phone number"
                    type="number"
                    name="phone"
                    value={memberInput.phone}
                    onChange={handleData("phone")}
                />

                <InputForm
                    title="Age"
                    type="number"
                    name="memberAge"
                    value={memberInput.memberAge}
                    onChange={handleData("memberAge")}
                />


                <div className="button-row">
                    <BackButton onClick={goBackStep}/>
                    <NextButton onClick={saveNewMember}/>          
                </div>
            </form>
        </>
    )
}
export default AddMember;
