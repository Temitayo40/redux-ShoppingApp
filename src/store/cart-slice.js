import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemLists: [],
    totalQuantity: 0,
    showCart: false,
    change: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalPrice;
      state.itemLists = action.payload.itemLists;
    },
    addTocart(state, action) {
      state.change = true;
      const newItem = action.payload;

      const existingItem = state.itemLists.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemLists.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      state.change = true;
      const id = action.payload;

      const existingItem = state.itemLists.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemLists = state.itemLists.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
