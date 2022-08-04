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
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    deleteItems(state, action) {
      const selectedProductIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload;
      });
      state.cartItems.splice(selectedProductIndex, 1);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getStoredCartItems(state) {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems !== null) {
        const cartItems = JSON.parse(storedCartItems);
        if (cartItems.length > 0) {
          state.cartItems = cartItems;
        }
      }
    }
  }
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
