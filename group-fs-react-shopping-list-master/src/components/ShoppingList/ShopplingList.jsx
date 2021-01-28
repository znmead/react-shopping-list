// This is the GET display

import ShoppingListItem from './ShoppingListItem';

function ShoppingList(props) {


    // put our list of items on the DOM
    // JS
    let listItems = props.list.map((item) => {
        // return some JSX for EVERY item in the itemList
        return (
            <ShoppingListItem
                item={item}
                itemsAssemble={props.itemsAssemble} />
        )
    });

    // JSX on the DOM
    return (
        <div>
            {itemList}
        </div>
    );

}

export default ShoppingList;