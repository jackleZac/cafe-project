import React from 'react';
import { RiDeleteRow } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

export const RemoveItem = ({ _id }) => {

    // https://www.flaticon.com/free-icons/delete - Delete icons created by Those Icons - Flaticon
    const dispatch = useDispatch();
    const handleDelete = (_id) => {
        const item = { _id };
        try {
            dispatch(deleteItem(item));
        } catch(error) {
            console.log(`Failed to delete item. Error ${error}`);
        }
    }
    return (
        <button onClick={() => handleDelete(_id)} className="float-right"><RiDeleteRow /></button>
    )
}
