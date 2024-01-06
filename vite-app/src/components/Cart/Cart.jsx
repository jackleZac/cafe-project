import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { itemsInCart } from "../../redux/handleCart/CartSlice";
import { AddQuantity } from "../../redux/handleCart/AddQuantity";
import { MinusQuantity } from "../../redux/handleCart/MinusQuantity";
import { RemoveItem } from "../../redux/handleCart/RemoveItem";
import { ShowTotalPrice } from "../../redux/handleCart/ShowTotalPrice";


export const Cart = () => {
    // Retrieve existing items in a cart
    const items = useSelector(itemsInCart);

    return (
        <div className="m-2 p-2 min-h-1/4 bg-[#ffffff] border-black rounded shadow-md">
            <h2 className="text-center font-bold text-xl py-2">My Cart</h2>
            <div className="p-4 mt-2 overflow-y-auto">
                {items.length == 0 ? <p className="text-center">Empty</p> : 
                <ul>
                    {items.map((eachItem) => (
                        <li key={eachItem._id}>
                            <div className="flex p-2 w-full border-b">
                                <div className="w-3/5 truncate">
                                    <div className="text-base">{eachItem.name}</div>
                                    <div className="text-sm">${eachItem.accPrice}</div>
                                </div>
                                <div className="w-1/5 pl-2 flex my-auto text-center">
                                    <AddQuantity {...eachItem}/>
                                    <div className="basis-1/2 m-2">{eachItem.quantity}</div>
                                    <MinusQuantity {...eachItem} />
                                </div>
                                <div className="w-1/5">
                                    <RemoveItem {...eachItem} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
            <ShowTotalPrice />
            <button className="w-full p-4 text-center border-solid border-2">CHECKOUT</button>
        </div>
    )
}