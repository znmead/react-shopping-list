import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem'
import DeleteList from  '../DeleteList/DeleteList.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ResetItems from '../ResetItems/ResetItems.jsx';

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

    const changeStatus = (itemId) => {
        console.log(`button pressed! with id`, itemId);
        axios.put('/list/',{id: itemId}
        ).then ((response) => {
            fetchItems();
            console.log(response);
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
                <AddItem fetchItems={fetchItems}/>
                <p>Under Construction...</p>
                <ResetItems changeStatus={changeStatus}/>
                <ShoppingList shoppingList={shoppingList} changeStatus={changeStatus} fetchItems={fetchItems}/>
            </main>
        </div>
    );
}

export default App;
