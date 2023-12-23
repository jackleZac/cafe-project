import { useSelector } from "react-redux";
import { itemsInCart } from "../addToCart/addToCartSlice";

export const DisplayCart = () => {
    const items = useSelector(itemsInCart);
    return (
        <div className="m-2 h-screen fixed w-1/4">
            <h2 className="text-center font-bold text-xl">My Cart</h2>
            <div className="p-4 mt-2 bg-[#f5f5ef] min-h-1/2">
                {items.length == 0 ? <div className="text-center">Empty</div> : 
                <ul>
                    {items.map((eachItem) => (
                        <li key={eachItem.id}>
                            <div className="flex p-2 w-full border-b">
                                <div className="w-3/4">
                                    <div className="text-lg">{eachItem.name}</div>
                                    <div className="">${eachItem.price}</div>
                                </div>
                                <div>Qty: {eachItem.quantity}</div>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}