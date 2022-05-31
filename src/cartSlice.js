import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      let isAlreadyinCart = false;
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          isAlreadyinCart = true;
          item.qty += 1;
        }
      });
      if (!isAlreadyinCart) {
        state.value.push(action.payload);
      }
    },
    remove: (state, action) => {
      const newState = state.value.filter((item) => item.id !== action.payload);
      state.value = newState;
    },
    oneMore: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload) {
          item.qty += 1;
        }
      });
    },
    oneLess: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload) {
          if (item.qty === 1) {
            const newState = state.value.filter(
              (item) => item.id !== action.payload
            );
            state.value = newState;
          } else {
            item.qty -= 1;
          }
        }
      });
    },
  },
});
export const { add, remove, oneMore, oneLess } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;
