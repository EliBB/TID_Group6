import React from "react";
import '../SignUp.css';
import Parse from "parse";
import InputForm from "../InputForm";
import PageHeader from "../../smallComponents/PageHeader";
import BackButton from "../../smallComponents/Buttons/BackButton";
import NextButton from "../../smallComponents/Buttons/NextButton";
import { useNavigate } from "react-router-dom";

function AddMember ({ 
    goNextStep, 
    handleData, 
    memberInput}) {

    async function saveNewMember(){
        const memberSignedUp = Parse.User.current();        
        memberSignedUp.set("username", memberInput.memberFirstname);
        memberSignedUp.set("lastname", memberInput.lastname)
        memberSignedUp.set("address", memberInput.address)
        memberSignedUp.set("phone", memberInput.phone)
        memberSignedUp.set("memberAge", memberInput.memberAge)

        try{
            let result = await memberSignedUp.save()
            console.log(result)
            goNextStep();
        } catch(error){
            alert("Error " + error.message)
        }
    } 
    const memberSignedUp = Parse.User.current(); 
    const firstname = memberSignedUp.get("firstname");

    function handleSubmit(event){
        event.preventDefault();
    } 

    const navigate = useNavigate();
    function goBack(){
        navigate("/excursionsOverview");
    }

    return(
        <div className="container">
            <PageHeader
                pageTitle="Your Informations"
            />

            <form className="input-form" onSubmit={handleSubmit}> 
                <InputForm
                    title="First name"
                    type="text"
                    name="memberFirstname"
                    value={firstname}
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
                    <BackButton onClick={goBack}/>
                    <NextButton onClick={saveNewMember}/>          
                </div>
            </form>
        </div>
    )
}
export default AddMember;
