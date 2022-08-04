import { createSlice } from '@reduxjs/toolkit';
import cartItem from '../models/cartItem';

type cartState = {
  cartItems: cartItem[];
};

const initialCartState: cartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const selectedProductIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (selectedProductIndex < 0) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[selectedProductIndex].quantity++;
      }
    },
    removeItem(state, action) {
      const selectedProductIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload;
      });
      const selectedProduct = state.cartItems[selectedProductIndex];
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity--;
      } else {
        state.cartItems.splice(selectedProductIndex, 1);
      }
    },
    deleteItems(state, action) {
      const selectedProductIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload;
      });
      state.cartItems.splice(selectedProductIndex, 1);
    },
    getStoredCartItems(state, action) {
      state.cartItems = action.payload;
    }
  }
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
