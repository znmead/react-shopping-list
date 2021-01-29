//  DELETE function and response goes here
import React from 'react';
import axios from 'axios';

// going to need to feed this into ShoppingList and replace the delete button with this dependancy
//  <button onClick={() => deleteShoppingItem(props.id)} class='deleter'>Delete</button>

//function StudentList({studentList , deleteStudent}) {

function DeleteList( props) {


    const deletePurchase = (props) => {
        console.log('Deleter Clicked')
      //  console.log(data.id);
        axios({
            method: 'DELETE',
            url: `/list/`,
            data:{
            id: this.shoppingList.id
        }
        }).then((response) => {
            console.log(response)
            fetchItems();

        })
    }



    return (
        <>
            <div key={props.id}>
                <button onClick={(event) => deletePurchase(props.id)} className="deleter" > Delete </button>  

            </div>
        </>
    )
}


export default DeleteList;



