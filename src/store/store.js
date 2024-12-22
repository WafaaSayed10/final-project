import { configureStore } from "@reduxjs/toolkit";
import Mode from "./slices/modeSlice";
import Favorite from "./slices/favoriteSlic";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        Theme: Mode,
        Favorite: Favorite,
        cart: cartReducer,
    },
});

export default store;
