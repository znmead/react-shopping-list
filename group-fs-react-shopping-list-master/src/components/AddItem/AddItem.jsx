import { useState } from "react";
import axios from 'axios';

function AddItem({fetchItems}) {
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState('');
    const [unitInput, setUnitInput] = useState('');

    const handleSubmit = (event) => {
        //prevent page from refreshing on submit
        event.preventDefault();
        //set all the inputs to the values of the input boxes
        setNameInput(nameInput);
        setQuantityInput(quantityInput);
        setUnitInput(unitInput);
        //send a POST request to the server submitting all the inputs
        axios({
            method: 'POST',
            url: '/list',
            data:{
                name: nameInput,
                quantity: quantityInput,
                unit: unitInput
            }
        }).then ((response) => {
            //clear out all the input fields
            setNameInput('');
            setQuantityInput('');
            setUnitInput('');
            fetchItems();
        })
    }

    return (
        <>
            <h2>Add an Item</h2>
            <div>Item: <input value={nameInput} onChange={(event) => setNameInput(event.target.value)}/></div>
            <div>Quantity: <input value={quantityInput} onChange={(event) => setQuantityInput(event.target.value)}/></div>
            <div>Unit: <input value={unitInput} onChange={(event) => setUnitInput(event.target.value)}/></div>
            <button onClick={handleSubmit}>Save</button>
        </>
    )

}

export default AddItem;