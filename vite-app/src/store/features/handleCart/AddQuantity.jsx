import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemQty } from './CartSlice';
import { MENU } from '../../../database/menu';

export const AddQuantity = ({ id }) => {
    const dispatch = useDispatch();
    const handleAddQuantity = (id) => {
        const selectedItem = MENU.find((product) => product.id === id);
        console.log(selectedItem);
        // Find initial price of selected item
        const initialPrice = selectedItem.price;
        const item = {id, price:initialPrice};
        try {
            dispatch(addItemQty(item));
        } catch(error) {
            console.log(`Failed to increase quantity. Error ${error}`);
        }
    }
    return (
    <button onClick={() => handleAddQuantity(id)}>
        +
    </button>
  )
}
