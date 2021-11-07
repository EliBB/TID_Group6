import React from 'react';
import { Link } from 'react-router-dom';
import MemberRegistration from './MemberRegistration';


function Member(){
    return(
        <div>
            <h1>This is the member page</h1>
            {/* <ScrollableTable/> */}
            
            <div>
                <Link to="/memberRegistration" activeStyle>
                        Sign Up
                </Link> 
            </div>

        </div>            

     
    
    )
}

export default Member;