import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/handleCart/CartSlice";

export const store = configureStore({
    reducer: {
        CartSliceName: CartReducer,
    }
})