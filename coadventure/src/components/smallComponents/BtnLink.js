import React from "react";
import { Link } from 'react-router-dom';

function BtnLink(props){
    return(
        <div>
            <Link to={props.link}>
                <button className="green-button"> 
                    {props.actionBtn}
                </button>
            </Link>
        </div>
    )
}

export default BtnLink;