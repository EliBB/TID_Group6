import React from "react";

function LineHeader(){
    const ColoredLine = () => (
        <hr
            style={{
                background: '#2F796D',
                backgroundColor: '#22F796D',
                height: 5, 
                width: 200,
            }}
        />
    );

    return(
        <ColoredLine></ColoredLine>
    )
}

export default LineHeader;