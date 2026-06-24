import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: []
  },
  reducers: {
    setCartData: (state, action) => {
      const incomingProduct = action.payload;
      const existingItem = state.cartData.find((item) => item.id === incomingProduct.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cartData.push({
          ...incomingProduct,
          quantity: 1
        });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartData.find((item) => item.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartData = state.cartData.filter((item) => item.id !== id);
    }
  }
});

export const { setCartData, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;