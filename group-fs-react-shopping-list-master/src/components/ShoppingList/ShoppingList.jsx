import { useState, useEffect } from 'react';
import axios from 'axios';
// This is the GET display


function ShoppingList({ shoppingList }) {


    // put our list of items on the DOM
    // JS
    // let listItems = shoppingList.map((item) => {}
    // return some JSX for EVERY item in the itemList
 
 

    return (
        <>
        {shoppingList.map((item) => 
        <div className="items"> 
            {/* {JSON.stringify(props)} */}
            <h2>{item.name}</h2>
            <p>Item: {item.name}</p>

            <h2>{item.itemQuantity}</h2>
            <p>Quantity: {item.quantity}</p>

            <h2>{item.itemUnit}</h2>
            <p>Unit: {item.unit}</p>

            <button onClick={() => shoppingList(item.id)}>Purchase</button>
            <button onClick={() => deleteShoppingItem(props.id)} class='deleter'> Delete </button>
        </div>
        )}
        </>
    );



}

export default ShoppingList;