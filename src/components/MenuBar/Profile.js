import React from "react";
import "./Profile.css";
import profilePic from '../../images/profile_picture.png';
import OverviewExcursions from '../smallComponents/OverviewExcursions';
import LineHeader from '../smallComponents/LineHeader';
import BtnDelete from "../smallComponents/BtnDelete";
import Parse from 'parse'
import PageHeader from "../smallComponents/PageHeader";

function Profile(){
    const user = Parse.User.current();

    const profileInfo = {
        firstname: user.get("username"),
        lastname: user.get("lastname"),
        email: user.get("email"), 
        age: user.get("memberAge"),
        address: user.get("address"),
        number: user.get("phone"),
    };

    const excursions = []

    async function retrieveExcursion(){
        const result = [];

        const getExcursions = Parse.Object.extend("ExcursionSignedUp");
        const query = new Parse.Query(getExcursions);
        query.equalTo("MemberID", user);

        try {
            const results = await query.find();
            for(let i = 0; i < results.length; i++){
                const object = results[i].get("ExcursionID");
                if(!result.includes(object.id)){
                    result.push(object.id);
                }
            }

            } catch (error) {
                console.log(`Error: ${JSON.stringify(error)}`);
            } 
        
        for(let j = 0; j < result.length; j++){
            const excur = Parse.Object.extend("Excursion");
            const q = new Parse.Query(excur)
            q.equalTo("objectId", result[j])
            
            try{
                const res = await q.find();
                for(let l = 0; l < res.length; l++){
                    const excursionId = res[l].id;
                    const name = res[l].get("name");
                    const where = res[l].get("country");
                    const fromDate = res[l].get("from_date");
                    const toDate = res[l].get("to_date")

                    const ex = {};
                    ex["excursionId"] = excursionId;
                    ex["type"] = name;
                    ex["where"] = where;
                    ex["from_date"] = fromDate;
                    ex["to_date"] = toDate;
                    excursions.push(ex);
                }
            }catch (e){
                console.log(`Error: ${JSON.stringify(e)}`);
            }
        }
    }

    retrieveExcursion();
    console.log("EXCUR ", excursions)
    
    return(
        <div className="main-container">
            <PageHeader
            pageTitle="Profile"/>


            <div className="profile-main-container">
                
                <div className="profile-info-container">
                    <div className="profile-col1">
                        <h2 className ="header-profile">{profileInfo.firstname} {profileInfo.lastname}</h2>

                        <img src={profilePic} className="profilePic" alt="ProfilePic"/>
                    </div>

                    <div className="profile-col2">
                        <h2 className ="profile-row-item">Email:</h2>
                        <p className ="profile-row-info">{profileInfo.email}</p>

                        <h2 className ="profile-row-item">Age:</h2>
                        <p className ="profile-row-info">{profileInfo.age}</p>
                        
                        <h2 className ="profile-row-item">Address:</h2>
                        <p className ="profile-row-info">{profileInfo.address}</p>

                        <h2 className ="profile-row-item">Phone Number:</h2>
                        <p className ="profile-row-info">{profileInfo.number}</p>
                    </div>
                </div>
                
            </div>


            <h2 className ="header-excursions">Registered excursions:</h2>
                <div className="excursion-overview">
                {/* I cannot get this to work - To show the objects of the excursions array from earlier */}
                    {excursions.map((excursion) => (
                        <div className="excursion">
                                <OverviewExcursions ClassName="info-bar"
                                    key={excursion.excursionId}
                                    type={excursion.type}
                                    where={excursion.where}
                                    fromDate={excursion.from_date}
                                    toDate = {excursion.to_date}
                                    actionBtn="Get Info">
                                </OverviewExcursions>
                            <div className="button-info">
                                <BtnDelete className="button-info" actionBtn="Delete Registration" ></BtnDelete>
                            </div>
                        
                        </div>
                    ))}
                </div>
        </div>
    
    )   
}

export default Profile;