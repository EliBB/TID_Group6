import React from "react";
import "./Profile.css";
import profilePic from '../../images/profile_picture.png';
import OverviewExcursions from '../smallComponents/OverviewExcursions';
import ColoredLine from '../smallComponents/LineHeader';
import BtnDelete from "../smallComponents/BtnDelete";
import Parse from 'parse'

function Profile(){

    const user = Parse.User.current();
    const result = [];

    const profileInfo = {
        firstname: user.get("First_Name"),
        lastname: user.get("Last_name"),
        email: user.get("email"), 
        age: user.get("Age"),
        address: user.get("Address"),
        number: user.get("Phone_num"),
    };

    async function retrieveExcursion(){
        const getExcursions = Parse.Object.extend("ExcursionSignedUp");
        const query = new Parse.Query(getExcursions);
        query.equalTo("MemberID", user);
        //console.log(query);

        try {
            const results = await query.find();
            //console.log(`ParseObjects found: ${JSON.stringify(results)}`);

            for(let i = 0; i < results.length; i++){
                const object = results[i].get("ExcursionID");
                result.push(object.id);
            }

            } catch (error) {
                console.log(`Error: ${JSON.stringify(error)}`);
            } 
    }

    //console.log(user.get("First_Name"));
    retrieveExcursion();

    console.log(result);

    const excursions = [
        // {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        // {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        // {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    ]

    async function addExcursions(){
        const excur = Parse.Object.extend("Excursion");
        const q = new Parse.Query(excur);
                
        try{
            for(let x=0; x < result.length; x++){
                q.equalTo("objectId", result[x]);
            }
            const result2 = await q.find();
            console.log(`ParseObjects found: ${JSON.stringify(result2)}`);

            for(let j = 0; j < result2.length; j++){
                const excursionId = j+1;

                const type = result2[j].get("name");
                console.log(type);

                const where = result2[j].get("country");
                console.log(where);

                const date = [result2[j].get("from_date"), result2[j].get("to_date")];
                console.log(date);

                const ex = {};
                ex["excursionId"] = excursionId;
                ex["type"] = type;
                ex["where"] = where;
                ex[date] = date;
                excursions.push(ex);
            }

            console.log(excursions);
            

        } catch(e) {
            console.log("Error!" + e);
        }
    }

    retrieveExcursion();
    addExcursions();

    console.log(excursions);

    return(
        <div className="main-container">

            <div className="profile-main-container">
                <div className="container-header">
                    <div className ="header-profile">
                        <h1>Profile</h1>
                        
                    </div>
                    <div className="horizontal-line">
                        <ColoredLine></ColoredLine>
                    </div>
                </div>
                

                <div className="profile-info-container">
                    <div className="profile-col1">
                        <div className ="header-profile">
                            <h2>{profileInfo.firstname} {profileInfo.lastname}</h2>
                        </div>
                        <div className="image-profile">
                            <img src={profilePic} className="profilePic" alt="ProfilePic"/>
                        </div>
                    </div>

                    <div className="profile-col2">
                        <div className ="profile-row-item">
                            <h2>Email:</h2>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.email}</p>
                        </div>
                        <div className ="profile-row-item">
                            <h2>Age:</h2>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.age}</p>
                        </div>
                        <div className ="profile-row-item">
                            <h2>Address:</h2>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.address}</p>
                        </div>
                        <div className ="profile-row-item">
                            <h2>Phone Number:</h2>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.number}</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="excursion-container">
                <div className ="profile-row-item">
                    <p>Registered excursions:</p>
                </div>

                <div className="users-excursions">

                    <div className="excursion-overview">
                        {excursions.map(excursion => (
                            <div className="excursion" key={excursion.excursionId}>
                                
                                <div className="info-bar">
                                    <OverviewExcursions type={excursion.type}
                                    where={excursion.where}
                                    date={excursion.date}
                                    actionBtn="Get Info"></OverviewExcursions>
                                </div>

                                <div className="button-info">
                                    <BtnDelete className="button-info" actionBtn="Delete Registration" ></BtnDelete>
                                </div>
                            
                            </div>
                        ))}
                    </div>

                </div>
                
            </div>
        </div>
    
    )   
}

export default Profile;