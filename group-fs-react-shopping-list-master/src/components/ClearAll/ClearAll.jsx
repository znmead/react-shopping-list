import axios from 'axios';

function ClearAll ({fetchItems}) {
    
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
            console.log(response);
            fetchItems();
        })
    }
    
    
    return (
<button id="all" onClick={(event) => deletePurchase(event.target.id)}>Clear</button>
    )
}

export default ClearAll;