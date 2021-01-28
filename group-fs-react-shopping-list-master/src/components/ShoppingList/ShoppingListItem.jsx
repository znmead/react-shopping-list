
import React, { useState } from 'react';
import axios from 'axios';

function ShoppingListItem({ itemList, itemDelete }) {

    
    

    // JSX on the DOM

    return (
        <div className="items">
            {/* {JSON.stringify(props)} */}
            <h2>{item.itemName}</h2>
            <p>Item: {item.name}</p>

            <h2>{item.itemQuantity}</h2>
            <p>Quantity: {item.quantity}</p>

            <h2>{item.itemUnit}</h2>
            <p>Unit: {item.unit}</p>

            <button onClick={() => itemList(item.id)}>Purchase</button>
            <button onClick={() => itemDelete(item.id)(item)}>Delete</button>

        </div>
    );

}

export default ShoppingListItem;

// {showError && <p className="alert">SOMETHING WENT WRONG</p>}

//  {/* conditionally render the hero's real name */}
//   { !isMasked && <p>Alias: {hero.alias}</p>}

//   {/* conditionally render Duty status */}
//   { onOrOffDuty()} 

// determine if we should render the on or off duty message
/*const onOrOffDuty = () => {
    if (hero.onDuty) {
        // need to return JSX
        return <p>ON DUTY</p>;
    } else {
        // need to return JSX
        return <p>SLEEPING</p>;
    }
}*/ 