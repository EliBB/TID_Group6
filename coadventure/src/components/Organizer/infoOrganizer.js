import React from 'react';
import './InfoOrganizer.css';
import { BiPencil } from "react-icons/bi"
import ExcursionInfo from '../Member/ExcursionInfo';
import BtnLink from '../smallComponents/BtnLink';
import BtnDelete from '../smallComponents/BtnDelete';

function InfoOrganizer(){
    return(
        <div>
            <ExcursionInfo/>

            <div className="container-list">
                <div className="lists">
                    <div className="header1" id="header">Shopping list</div>
                    <div className="green-btn" id="btn">
                        <BtnLink className="btn-edit" actionBtn={"Edit"} link=""></BtnLink> 
                        <BiPencil id="pencil-icon"/>
                    </div>
                </div>
                
                <div className="lists">
                    <div className="header1" id="header">Duty List</div>
                    <div className="green-btn" id="btn">
                        <BtnLink className="btn-edit" actionBtn="Edit" link=""></BtnLink>
                        <BiPencil id="pencil-icon"/>
                    </div>
                </div>
                

                <div className="delete-btn">
                    <BtnDelete actionBtn="Delete" ></BtnDelete>
                </div>
            </div>

            
        </div>

    );
}

export default InfoOrganizer;