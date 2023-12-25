import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

export const RemoveItem = ({ id }) => {
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
        <button onClick={() => handleDelete(id)}>Remove</button>
    )
}
