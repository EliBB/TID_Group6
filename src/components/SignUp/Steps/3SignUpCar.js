import React from 'react';
import '../SignUp.css';
import BackButton from '../../smallComponents/Buttons/BackButton';
import GreenButton from '../../smallComponents/Buttons/GreenButton';
import PageHeader from '../../smallComponents/PageHeader';

function SignUpCar({
    goNextStep,
    goBackStep,
    skipStep
}){
    return(
        <div className="container">
            <PageHeader
            pageTitle="Transportation"
            />
            <div className="info-box-container">
            

                <div className="info-box">               
                    <div className="info-box-row">
                        <GreenButton text="No car" onClick={skipStep}/>
                        <GreenButton text="Register car" onClick={goNextStep}/>
                    </div>
                </div>
                
                <div className="single-button-row">
                    <BackButton onClick={goBackStep}/>
                </div>
            </div>
        </div>

    );
}

export default SignUpCar;