import { useSelector } from "react-redux";
import { useState, use } from "react";
import { itemsInCart } from "../../store/features/handleCart/CartSlice";
import { AddQuantity } from "../../store/features/handleCart/AddQuantity";
import { MinusQuantity } from "../../store/features/handleCart/MinusQuantity";
import { RemoveItem } from "../../store/features/handleCart/RemoveItem";
import { ShowTotalPrice } from "../../store/features/handleCart/ShowTotalPrice";


export const Cart = () => {

    // https://www.flaticon.com/free-icons/close Close icons created by joalfa - Flaticon
    const items = useSelector(itemsInCart);
    
    return (
        <div className="m-2 h-3/4 fixed w-1/4 bg-[#ffffff] rounded">
            <h2 className="text-center font-bold text-xl p-2">My Cart</h2>
            <div className="p-4 mt-2 bg-[#f5f5ef] min-h-1/2 m-2">
                {items.length == 0 ? <div className="text-center">Empty</div> : 
                <ul>
                    {items.map((eachItem) => (
                        <li key={eachItem.id}>
                            <div className="flex p-2 w-full border-b">
                                <div className="w-2/4">
                                    <div className="text-lg">{eachItem.name}</div>
                                    <div className="">${eachItem.price}</div>
                                </div>
                                <div className="w-1/4 ml-2">
                                    <div className="flex flex-reverse items-center justify-center h-1/2 bg-[#d9d9d9] text-center">
                                        <AddQuantity {...eachItem}/>
                                        <div className="basis-1/2">{eachItem.quantity}</div>
                                        <MinusQuantity {...eachItem} />
                                    </div>
                                </div>
                                <div className="w-1/4">
                                    <RemoveItem {...eachItem} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
            <ShowTotalPrice />
        </div>
    )
}