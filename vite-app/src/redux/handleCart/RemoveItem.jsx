import React from 'react';
import { RiDeleteRow } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

export const RemoveItem = ({ _id }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        const item = { _id:_id };
        try {
            dispatch(deleteItem(item));
            console.log(`RemoveItem button is clicked`)
        } catch(error) {
            console.log(`RemoveItem button did not work properly. ${error}`);
        }
    }
    return (
        <button onClick={() => handleDelete()} className="float-right"><RiDeleteRow /></button>
    )
}
