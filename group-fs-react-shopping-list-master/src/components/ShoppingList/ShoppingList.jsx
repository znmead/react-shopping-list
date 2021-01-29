import { useState, useEffect } from 'react';
import axios from 'axios';
import './ShoppingList.css';

// This is the GET display


function ShoppingList({ shoppingList, setPurchase, deletePurchase }) {


    // put our list of items on the DOM
    // JS
    // let listItems = shoppingList.map((item) => {}
    // return some JSX for EVERY item in the itemList

    return (
        <>
        {shoppingList.map((item) => 
        <div key={item.id}className="items"> 
            {/* {JSON.stringify(props)} */}
            
            <p>Item: {item.name}</p>

            <p>Quantity: {item.quantity}</p>

            <p>Unit: {item.unit}</p>

            <button onClick={(event) => {setPurchase}}>Purchase</button>
            <button onClick={(event) => deletePurchase(shoppingList.id)} className="deleter" > Delete </button>  
        </div>
        )}
        </>
    );
}

export default ShoppingList;