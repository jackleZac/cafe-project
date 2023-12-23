import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
}

export const addToCartSlice = createSlice({
    name: 'addToCartSliceName',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const recentlyAdded = action.payload;
            // Check if the item with the same id already exists in the cart
            const existingItem = state.cart.find(item => item.id === recentlyAdded.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...recentlyAdded, quantity: 1})
            }
        },
    },
});

export const { addToCart } = addToCartSlice.actions;
export const itemsInCart = (state) => state.addToCartSliceName.cart;
export default addToCartSlice.reducer;