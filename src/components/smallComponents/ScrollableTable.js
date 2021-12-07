import React from 'react';
import './ScrollableTable.css'

function ScrollableTable(props) {

    return(
        <div className="scrollable-table">
            <table className="list-table">
                <tr className="table-header">
                    <td>{props.headerOne}</td>
                    <td>{props.headerTwo}</td>
                    <td>{props.headerThree}</td>
                </tr>

                {props.listItems.map(list => (
                    <tr className="table-item" key={list.id}>
                        <td>{list.col1}</td>
                        <td>{list.col2}</td>
                        <td>{list.col3}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
    
}

export default ScrollableTable;