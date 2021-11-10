import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../../../../images/Logo_CoAdventure.png'

function Home(){
    return(
        
            <div className="home-container">
                <div className="home-row">
                    <div className="home-btn">
                        <Link to="/organizer" >
                            Organizer
                        </Link>
                    </div>

                    <div className="home-btn">
                        <Link to="/member" >
                            Member
                        </Link>
                    </div>
                </div>  

                <div className="home-row">
                    <img src={Logo} className="logo"/>

                </div>  
                
            </div>

           
        
    
    )
}

export default Home;