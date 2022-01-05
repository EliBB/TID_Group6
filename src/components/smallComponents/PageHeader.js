import React from "react";
import './PageHeader.css'

function PageHeader({pageTitle}){
    return(
        <div className="page-header">
            <div className="page-title"><h1>{pageTitle}</h1></div>
            <hr className="header-line"/>
        </div>
    )

}

export default PageHeader;