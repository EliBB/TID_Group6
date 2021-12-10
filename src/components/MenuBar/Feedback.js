import React from 'react';
import PageHeader from "../smallComponents/PageHeader";
import './Feedback.css';
import GreenButton from '../smallComponents/Buttons/GreenButton';

function Feedback(){

    return(
        <div className="feedback-container">
                <PageHeader
                pageTitle="Send feedback"
                />

                <div className="feedback-box">
                    <div className="feedback-row">
                        <h3>How was the food suply?</h3>
                        <div><hr/></div>
                    
                        <label><input type="radio" value="Way too much food" text="test"/> Way too much food
                        </label>

                        <label><input type="radio" value="Little too much food"/> Little too much food
                        </label>
                        
                        <label><input type="radio" value="Perfect"/> Perfect
                        </label>
                        
                        <label><input type="radio" value="Litlle too less food"/> Little to less food
                        </label>
                        
                        <label><input type="radio" value="Way too less food"/> Way too less food
                        </label>
                        <br/>
                    </div>

                    <div className="feedback-row">
                        <h3>Were you missing something on the menu?</h3>
                        <div><hr/></div>
                        <label>
                        <textarea className="message-box"/> 
                        </label>
                        <br/>
                    </div>

                    <div className="feedback-row">
                        <h3>How satisfied were you with the duties?</h3>
                        <div><hr/></div>
                        <label><input className="feedback-range" type="range" min="0%" max="100%"></input></label>
                        <br/>
                    </div>
                </div>
                
                <div className="send-button">
                    <GreenButton text="Send feedback"/>
                </div>
            </div>
    )
}

export default Feedback;