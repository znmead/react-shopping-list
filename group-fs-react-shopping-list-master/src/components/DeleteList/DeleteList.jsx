//  DELETE function and response goes here
import React from 'react';
import axios from 'axios';

// going to need to feed this into ShoppingList and replace the delete button with this dependancy
//  <button onClick={() => deleteShoppingItem(props.id)} class='deleter'>Delete</button>

//function StudentList({studentList , deleteStudent}) {

function DeleteList({ itemId, fetchItems}) {


    const deletePurchase = (itemId) => {
        console.log('Deleter Clicked')
      //  console.log(data.id);
        axios({
            method: 'DELETE',
            url: `/list/`,
            data:{
            id: itemId
        }
        }).then((response) => {
            console.log(response)
            fetchItems();

        })
    }



    return (
        <>
          <button onClick={(event) => deletePurchase(itemId)} className="deleter" > Delete </button>  
        </>
    )
}


export default DeleteList;



