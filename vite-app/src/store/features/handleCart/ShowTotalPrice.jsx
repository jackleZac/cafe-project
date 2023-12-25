import React from 'react';
import { useSelector } from 'react-redux';
import { itemsTotalPrice } from './CartSlice';
import { showTotal } from './CartSlice';

export const ShowTotalPrice = () => {
    const total = useSelector(itemsTotalPrice);
    console.log(total);
    return (
        <div className="w-full flex">
            <div className="basis-1/2">Total</div>
            <div className="basis-1/2">{total}</div>
        </div>
    )
}
