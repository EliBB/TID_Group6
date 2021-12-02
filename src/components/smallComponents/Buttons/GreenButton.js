import React from 'react';
import './Buttons.css';

function GreenButton({text, onClick}){
    return(
        <button 
            className="green-button" 
            onClick={onClick}
            text={text}>
                <p>{text}</p>
            
        </button>
    )
}

export default GreenButton;