import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';



/* Hooks and definitions:
const [shopItem, postShoppingList] = useState('');
const [itemArray, getShoppingList] = useState([]);
shopItem = Item/object to be purchased.
postShoppingList = Function to create shopItem Object.
itemArray = array of shopItem (s)
getShoppingList = function to display itemArray.

*/





function App() {

    const [shoppingList, setShoppingList] = useState([]);

    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/list'
        }).then((response) => {
            console.log(response.data);
            setShoppingList(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchItems();
    }, []);




    console.log('Rendering App'); 


    return (
        <div className="App">
            <Header />
            <main>
                <AddItem />
                <p>Under Construction...</p>
                <ShoppingList shoppingList={shoppingList} />
            </main>
        </div>
    );
}

export default App;
