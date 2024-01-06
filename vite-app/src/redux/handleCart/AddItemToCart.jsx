import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';


export const AddItemToCart = ({_id, name, price}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        // Properties of the selected item
        const item = {
            _id:_id, 
            name:name, 
            initialPrice:price,
            accPrice:price,
            quantity:1 };
        try {
            // Add the selected item to cart
            dispatch(addToCart(item));
            console.log(`Order button clicked: ${JSON.stringify(item)}`);
        } catch(error) {
            console.log(`Order button did not work as expected. ${error}`)
        }
    }
    return (
        // Executes handleAddToCart when a button is clicked
        <button onClick={() => handleAddToCart()}
            className="text-sm text-center my-4 basis-1/2 bg-[#d5dee2] rounded-xl">
            ORDER
        </button>
    )
}