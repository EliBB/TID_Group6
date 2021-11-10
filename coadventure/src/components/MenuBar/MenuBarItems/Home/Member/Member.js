import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Member.css';


function Member(){

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    
    ]

    /* const [state, setState] = useState([]); */

    return(
        <div className="member-frontpage-container">
            <div className="member-frontpage-header">
                <p>Member</p>
            </div>
            
            {excursions.map(excursion => (
                <div className="member-frontpage-row" key={excursion.excursionId}>
                    <div className="member-frontpage-col1">
                        <div className="member-frontpage-col-items">
                            <p>{excursion.type}</p>
                        </div>

                        <div className="member-frontpage-col-items">
                            <p>{excursion.where}</p>
                        </div>

                        <div className="member-frontpage-col-items">
                            <p>{excursion.date}</p>
                    </div>   
                </div>

                
 
                <div className="member-frontpage-col2">
                    <Link to={`member/${excursion.excursionId}`}  className="member-link">
                        <button>
                            Get info
                        </button>
                    </Link>
                </div>
            </div>
            
            ))}
            
        </div>            

     
    
    )
}

export default Member;