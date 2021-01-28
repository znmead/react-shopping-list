//  Clear button and response goes here
import React from 'react';


function ClearList({ itemArray }) {



    return (
        <>
            <div >
                <button onClick={() => clearShoppingItem({itemArray})} class='clearer'>Clear</button>
            </div>
        </>
    )
}


export default ClearList;
