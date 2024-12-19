import { configureStore } from "@reduxjs/toolkit";
import Mode from "./slices/modeSlice";
import cartReducer from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    Theme: Mode,
    cart: cartReducer,
  },
});

export default store;
