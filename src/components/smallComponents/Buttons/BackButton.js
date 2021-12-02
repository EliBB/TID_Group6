import React from 'react';
import './Buttons.css';

function BackButton({onClick}){
    return(
        <button 
            className="back-button" 
            onClick={onClick}>
            <p>Back</p>
        </button>
    )
}

export default BackButton;