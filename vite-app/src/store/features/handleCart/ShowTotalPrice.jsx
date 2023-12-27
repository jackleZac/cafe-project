import React from 'react';
import { useSelector } from 'react-redux';
import { itemsTotalPrice } from './CartSlice';

export const ShowTotalPrice = () => {
    const total = useSelector(itemsTotalPrice);
    console.log(total);
    return (
        <div className="w-full p-4 grid grid-cols-2">
            <div>
                <div className="basis-1/2 text-lg">Delivery Fee</div>
                <div className="basis-1/2 font-bold text-sm">Total</div>
            </div>
            <div>
                <div className="basis-1/2">Free</div>
                <div className="basis-1/2">$ {total}</div>
            </div>
        </div>
    )
}
