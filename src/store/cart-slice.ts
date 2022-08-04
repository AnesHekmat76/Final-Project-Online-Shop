import { createSlice } from '@reduxjs/toolkit';
import cartItem from '../models/cartItem';

type cartState = {
  cartItems: cartItem[];
};

const initialCartState: cartState = {
  cartItems: [
    // {
    //   id: 1,
    //   title: 'car',
    //   description: 'samand',
    //   price: 4,
    //   quantity: 2
    // },
    // {
    //   id: 2,
    //   title: 'car',
    //   description: 'l90',
    //   price: 5,
    //   quantity: 2
    // },
    // {
    //   id: 3,
    //   title: 'car',
    //   description: 'peguot',
    //   price: 6,
    //   quantity: 1
    // }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const selectedProductIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (selectedProductIndex < 0) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[selectedProductIndex].quantity++;
      }
    }
  }
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
