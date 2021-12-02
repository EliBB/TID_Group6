import React from 'react';
import './Buttons.css';

function NextButton({onClick}){
    return(
        <button 
            className="next-button" 
            onClick={onClick}
            type="submit">
            <p>Next</p>
        </button>
    )
}

export default NextButton;