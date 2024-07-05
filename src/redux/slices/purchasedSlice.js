import { createSlice } from '@reduxjs/toolkit';

export const purchasedSlice = createSlice({
  name: 'purchased',
  initialState: [], 
  reducers: {
    addToPurchased: (state, action) => {
      state.push(action.payload); 
  },
    clearPurchased: (state) => {
      return [];
    },
  },
});

export const { addToPurchased } = purchasedSlice.actions;
export default purchasedSlice.reducer;