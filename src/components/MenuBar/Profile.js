import React from "react";
import "./Profile.css";
import profilePic from '../../images/profile_picture.png';
import OverviewExcursions from '../smallComponents/OverviewExcursions';
import ColoredLine from '../smallComponents/LineHeader';
import BtnDelete from "../smallComponents/BtnDelete";

function Profile(){

    const profileInfo = {
        name: "Oscar Petersen", 
        email: "Oscar_Petersen@gmail.com", 
        age: 45,
        address: "Rued Langgaards vej 7, 2300 København S",
        number: 24254546,
    };

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    ]

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
                            <h2>{profileInfo.name}</h2>
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