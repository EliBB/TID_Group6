import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(){
    return(
        
            <div className="home-container">
                <div className="home-col">
                    <div className="home-btn">
                        <Link to="/organizer" activeStyle>
                            Organizer
                        </Link>
                    </div>
                </div>

                <div className="home-col">
                    <div className="home-btn">
                        <Link to="/member" activeStyle>
                            Member
                        </Link>
                    </div>
                </div>
            </div>

           
        
    
    )
}

export default Home;