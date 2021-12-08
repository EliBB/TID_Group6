import React from "react";
import './PageHeader.css'
import LineHeader from "./LineHeader";

function PageHeader({pageTitle}){
    return(
        <div className="page-header">
            <h1>{pageTitle}</h1>
            <LineHeader/>
        </div>
    )

}

export default PageHeader;