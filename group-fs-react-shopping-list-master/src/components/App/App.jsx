import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem'

/* Hooks and definitions:
const [shopItem, postShoppingList] useState('');
const [itemArray, getShoppingList] useState([]);
shopItem = Item/object to be purchased.
postShoppingList = Function to create shopItem Object.
itemArray = array of shopItem (s)
getShoppingList = function to display itemArray.

*/

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AddItem />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
