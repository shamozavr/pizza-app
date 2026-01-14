import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 1,
  count: 2
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index === -1) {
        const item = { id, qty: 1 }
        state.items.push(item)
      } else {
        state.items[index].qty += 1;
      }
    },
    deleteItem(state, action) {

    }
  }
})

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer