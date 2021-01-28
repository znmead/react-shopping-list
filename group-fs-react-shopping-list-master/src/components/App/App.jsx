import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem'
import DeleteList from '../DeleteList/DeleteList.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';



/* Hooks and definitions:
const [shopItem, postShoppingList] = useState('');
const [itemArray, getShoppingList] = useState([]);
shopItem = Item/object to be purchased.
postShoppingList = Function to create shopItem Object.
itemArray = array of shopItem (s)
getShoppingList = function to display itemArray.

*/
// const [itemArray, deleteShoppingItem] = useState();

// const deleteShoppingItem = (itemId) => {
//     console.log('Deleter Clicked')
//     axios({
//         method: 'DELETE',
//         url: `/list/${id}`,
//     }).then((response) => {
//         console.log(response)
//         getShoppingList();

//     })
// }




function App() {

    const [shoppingList, SetShoppingList] = useState([]);

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
