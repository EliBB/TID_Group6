import React from "react";
import "./Profile.css";
import profilePic from '../../images/profile_picture.png';
import Overview from '../smallComponents/OverviewExcursions';
import ColoredLine from '../smallComponents/LineHeader';

function Profile(){
    const btnAction = "Delete Registration"
    const btnLink = "/bookSeats"

    const profileInfo = {
        name: "Oscar Petersen", 
        email: "Oscar_Petersen@gmail.com", 
        age: 45,
        address: "Rued Langgaards vej 7, 2300 København S",
        number: 24254546,
    };

    return(
        <div className="main-container">

            <div className="profile-main-container">
                <div className="container-header">
                    <div className ="header-profile">
                        <p>Profile</p>
                        
                    </div>
                    <div className="horizontal-line">
                        <ColoredLine></ColoredLine>
                    </div>
                </div>
                

                <div className="profile-info-container">
                    <div className="profile-col1">
                        <div className ="header-profile">
                            <p>{profileInfo.name}</p>
                        </div>
                        <div className="image-profile">
                            <img src={profilePic} className="profilePic" alt="ProfilePic"/>
                        </div>
                    </div>

                    <div className="profile-col2">
                        <div className ="profile-row-item">
                            <p>Email:</p>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.email}</p>
                        </div>
                        <div className ="profile-row-item">
                            <p>Age:</p>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.age}</p>
                        </div>
                        <div className ="profile-row-item">
                            <p>Address:</p>
                        </div>
                        <div className ="profile-row-info">
                            <p>{profileInfo.address}</p>
                        </div>
                        <div className ="profile-row-item">
                            <p>Phone Number:</p>
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
                <Overview actionBtn={btnAction} linkBtn={btnLink}/>
                
            </div>
        </div>
    
    )   
}

export default Profile;