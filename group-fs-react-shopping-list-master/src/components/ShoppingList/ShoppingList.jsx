import { useState, useEffect } from 'react';
import axios from 'axios';
import './ShoppingList.css';
import DeleteList from '../DeleteList/DeleteList.jsx';

// This is the GET display


function ShoppingList({ shoppingList, changeStatus, fetchItems }) {

    // put our list of items on the DOM
    // JS
    // let listItems = shoppingList.map((item) => {}
    // return some JSX for EVERY item in the itemList
    // const [array, deletePurchase] = useState();




    return (
        <>
        {shoppingList.map(item => 
        <div key={item.id}className="items"> 
            {/* {JSON.stringify(props)} */}
            
            <p>Item: {item.name}</p>

            <p>Quantity: {item.quantity}</p>

            <p>Unit: {item.unit}</p>

            <p>{(item.purchased ? 'PURCHASED' : 'Not Purchased')}</p>

            <button id={item.id} onClick={(event) => {changeStatus(event.target.id)}}>Purchase</button>
            <DeleteList itemId={item.id} fetchItems={fetchItems}/>  

        </div>
        )}
        </>
    );
}

export default ShoppingList;