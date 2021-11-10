import React from 'react';
import ReactTable from 'react-table';

/* const data= */


function ScrollableTable(){
    return(
        <div>
            <ReactTable /* data={} */ 
                columns ={[
                    {
                        Header: "Item",
                    },
                    {
                        Header: "Amount"
                    },
                    {
                        Header: "Unit"
                    }
                ]}
            />
        </div>
    )
}

export default ScrollableTable;