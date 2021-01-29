import axios from 'axios';
function ResetItems({changeStatus}){

    return (
        <button id="all" onClick={(event) => changeStatus(event.target.id)}>Reset</button>
    )
}

export default ResetItems;