import OverviewExcursions from '../smallComponents/OverviewExcursions';
import ColoredLine from '../smallComponents/LineHeader';
import BtnLink from '../smallComponents/BtnLink';
import './Member.css';


function Member(){

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    
    ]

    const btnLink='';

    return(
        <div className="member-container">
            <div className="member-header">
                <div className="header-member">
                    <p className="header1">Excursions</p>
                </div>
                

                <div className="horizontal-line">
                    <ColoredLine></ColoredLine>
                </div>
            </div>

            <div className="member-excursions">

                <div className="all-excursions">
                    {excursions.map(excursion => (
                        <div className="one-excursion" key={excursion.excursionId}>

                            <div className="info-excursion">
                                <OverviewExcursions type={excursion.type}
                                where={excursion.where}
                                date={excursion.date}
                                actionBtn="Get Info"></OverviewExcursions>
                            </div>

                            <div className="button-getInfo">
                                <BtnLink className="button-info" actionBtn="Get info" link={btnLink}></BtnLink>
                            </div>
                        
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}

export default Member;