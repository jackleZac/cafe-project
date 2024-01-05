import React from 'react';
import { CiSquareMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { minusItemQty } from './CartSlice';
import { MENU } from '../../../database/menu';

export const MinusQuantity = ({ _id }) => {
    const dispatch = useDispatch();
    const handleMinusQuantity = (_id) => {
        const selectedItem = MENU.find((product) => product._id === _id);
        console.log(selectedItem);
        const initialPrice = selectedItem.price;
        const item = {_id, price:initialPrice};
        try {
            dispatch(minusItemQty(item));
        } catch(error) {
            console.log(`Failed to decrease quantity. Error ${error}`);
        }
    }
    return (
    <button onClick={() => handleMinusQuantity(_id)} className="text-xl">
        <CiSquareMinus />
    </button>
  )
}
