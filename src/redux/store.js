import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./slices/cartSlice"
import newsSlice from "./slices/newsSlice"
import shopSlice from "./slices/shopSlice"
import modelsSlice from "./slices/modelsSlice"

const store = configureStore({
  reducer: {
    shopSlice,
    modelsSlice,
    cartSlice,
    newsSlice,
  },
});

export default store; 