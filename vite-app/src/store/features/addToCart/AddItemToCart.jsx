import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './addToCartSlice';


export const AddItemToCart = ({ id, name, price}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (id, name, price, quantity) => {
        const item = {id, name, price, quantity};
        // Console log for testing purposes
        try {
            dispatch(addToCart(item));
            console.log(item);
        } catch(error) {
            console.log(`Failed to Add Item to Cart. Error: ${error}`)
        }
    }
    return (
        // Add item to cart when clicked
        <button onClick={() => handleAddToCart(id, name, price, 1)}>
            ORDER
        </button>
    )
}