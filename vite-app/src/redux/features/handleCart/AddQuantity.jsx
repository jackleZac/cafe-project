import React from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addItemQty } from './CartSlice';
import { MENU } from '../../../database/menu';

export const AddQuantity = ({ _id }) => {
    const dispatch = useDispatch();
    const handleAddQuantity = (_id) => {
        const selectedItem = MENU.find((product) => product._id === _id);
        console.log(selectedItem);
        // Find initial price of selected item
        const initialPrice = selectedItem.price;
        const item = {_id, price:initialPrice};
        try {
            dispatch(addItemQty(item));
        } catch(error) {
            console.log(`Failed to increase quantity. Error ${error}`);
        }
    }
    return (
    <button onClick={() => handleAddQuantity(_id)} className="text-xl">
        <CiSquarePlus />
    </button>
  )
}
