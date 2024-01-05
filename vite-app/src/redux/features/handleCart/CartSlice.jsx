import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    total: null,
};

const calcTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price, 0);
};

export const CartSlice = createSlice({
    name: 'CartSliceName',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            try {
                const itemToAdd = action.payload;
                // Check if the item with the same _id already exists in the cart
                const existingItem = state.cart.find(item => item._id === itemToAdd._id);
                if (existingItem) {
                    // If item has been previously added, just update quantity and price
                    existingItem.quantity += 1;
                    existingItem.price += itemToAdd.price;
                } else {
                    // Otherwise, add new item with _id, name, price, quantity
                    state.cart = [...state.cart, { ...itemToAdd, quantity: 1 }];
                }
            } catch (err) {
                console.log(err);
            } finally {
                state.total = calcTotal(state.cart);
            }
        },
        deleteItem: (state, action) => {
            try {
                const itemToRemove = action.payload;
                // Find item that matches the given _id
                const updatedCart = state.cart.filter(item => item._id !== itemToRemove._id);
                // Remove the item, return the updated cart
                state.cart = updatedCart;
            } catch (err) {
                console.log(err);
            } finally {
                state.total = calcTotal(state.cart);
            }
        },
        addItemQty: (state, action) => {
            try {
                const itemToAdd = action.payload;
                // Find existing item that matches the given _id
                const existingItem = state.cart.find(item => item._id === itemToAdd._id);
                console.log(existingItem);
                if (existingItem) {
                    // If found, increase quantity and price
                    existingItem.quantity += 1;
                    existingItem.price += itemToAdd.price;
                };
            } catch (err) {
                console.log(err);
            } finally {
                state.total = calcTotal(state.cart);
            }
        },
        minusItemQty: (state, action) => {
            try {
                const itemToMinus = action.payload;
                // Find existing item that matches the given _id
                const existingItem = state.cart.find(item => item._id === itemToMinus._id);
                if (existingItem && existingItem.quantity > 1) {
                    // For item with quantity at least 1, decrease quantity and price
                    existingItem.quantity -= 1;
                    existingItem.price -= itemToMinus.price;
                } else if (existingItem.quantity === 1) {
                    // For item with quantity less than 1, remove the item
                    const updatedCart = state.cart.filter(item => item._id !== itemToMinus._id);
                    state.cart = updatedCart;
                }
            } catch (err) {
                console.log(err);
            } finally {
                state.total = calcTotal(state.cart);
            }
        },
    },
});

export const { addToCart, deleteItem, addItemQty, minusItemQty, showTotal} = CartSlice.actions;
export const itemsInCart = (state) => state.CartSliceName.cart;
export const itemsTotalPrice = (state) => state.CartSliceName.total;
export default CartSlice.reducer;