import React from 'react';
import './ScrollableTable.css'

function ScrollableTable(props) {
    return(
        <div className="scrollable-table">
            <table>
                <tr className="table-header">
                    <td className="table-first">Item</td>
                    <td className="table-second">Amount</td>
                    <td className="table-third">Unit</td>
                </tr>

                {props.listItems.map(shopping => (
                    <tr className="table-item" key={shopping.id}>
                        <td className="table-first">{shopping.item}</td>
                        <td className="table-second">{shopping.amount}</td>
                        <td className="table-third">{shopping.unit}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ScrollableTable;