import { useState, useEffect } from 'react';
import axios from 'axios';
import './ShoppingList.css';
import DeleteList from '../DeleteList/DeleteList.jsx';
import GimmeButtons from '../GimmeButtons/GimmeButtons'
// This is the GET display


function ShoppingList({ shoppingList, changeStatus, fetchItems }) {

    const [ispurchased, setIsPurchased] = useState (false);

    // put our list of items on the DOM
    // JS
    // let listItems = shoppingList.map((item) => {}
    // return some JSX for EVERY item in the itemList
    // const [array, deletePurchase] = useState();

const checkPurchase = (purchase, itemId) => {
    if (purchase){
    return <p>PURCHASED</p>;
    } else{
        return <GimmeButtons id={itemId} changeStatus={changeStatus} fetchItems={fetchItems}/>
    }
}


    return (
        <>
        {shoppingList.map(item => 
        <div key={item.id}className="items"> 
            {/* {JSON.stringify(props)} */}
            
            <p>Item: {item.name}</p>

            <p>Quantity: {item.quantity}</p>

            <p>Unit: {item.unit}</p>

            {checkPurchase(item.purchased, item.id)}
            
        </div>
        )}
        </>
    );
}

export default ShoppingList;