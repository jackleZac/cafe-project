import React from 'react'
import { useDispatch } from 'react-redux';
import { minusItemQty } from './CartSlice';
import { MENU } from '../../../database/menu';

export const MinusQuantity = ({ id }) => {
    const dispatch = useDispatch();
    const handleMinusQuantity = (id) => {
        const selectedItem = MENU.find((product) => product.id === id);
        console.log(selectedItem);
        const initialPrice = selectedItem.price;
        const item = {id, price:initialPrice};
        try {
            dispatch(minusItemQty(item));
        } catch(error) {
            console.log(`Failed to decrease quantity. Error ${error}`);
        }
    }
    return (
    <button onClick={() => handleMinusQuantity(id)}>
        -
    </button>
  )
}
