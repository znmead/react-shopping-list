import DeleteList from '../DeleteList/DeleteList.jsx'

function GimmeButtons({ id, shoppingList, changeStatus, fetchItems }) {

    return (
        <>
        <div>
        <button id={id} onClick={(event) => {changeStatus(event.target.id)}}>Purchase</button> 
        <DeleteList itemId={id} fetchItems={fetchItems}/>
        </div>           
        </>
    )
}

export default GimmeButtons;