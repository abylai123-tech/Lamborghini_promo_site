import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [

    ],
    },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.title === action.payload.title);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity--;
        } else {
          state.cartItems.splice(index, 1);
        }
      }
    },
    clearCart: (state ) => {
      state.cartItems.length = 0;
    }
  },
});

export const { addToCart, deleteItem, setCartItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
