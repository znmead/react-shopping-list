//  DELETE function and response goes here
import React from 'react';
import axios from 'axios';

//function StudentList({studentList , deleteStudent}) {

function DeleteList(props) {



    return (
        <>
            <div key={props.id}>
                <button onClick={() => deleteShoppingItem(props.id)} class='deleter'>Delete</button>
            </div>
        </>
    )
}


export default DeleteList;


//
