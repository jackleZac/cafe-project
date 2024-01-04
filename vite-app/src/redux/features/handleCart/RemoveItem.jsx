import React from 'react';
import { RiDeleteRow } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

export const RemoveItem = ({ id }) => {

    // https://www.flaticon.com/free-icons/delete - Delete icons created by Those Icons - Flaticon
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const item = { id };
        try {
            dispatch(deleteItem(item));
        } catch(error) {
            console.log(`Failed to delete item. Error ${error}`);
        }
    }
    return (
        <button onClick={() => handleDelete(id)} className="float-right"><RiDeleteRow /></button>
    )
}
