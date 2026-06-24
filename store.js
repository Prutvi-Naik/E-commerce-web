import { configureStore } from "@reduxjs/toolkit";
import BannerReducer from "./src/Redux/BannerSlice"
import SearchReducer from "./src/Redux/SearchSlice"
import CartReducer from "./src/Redux/CartSclice"

export const store = configureStore({
reducer:{
    banner:BannerReducer,
    search:SearchReducer,
    cart:CartReducer
}
})