import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';
import productImg from '../assets/product.jpg';

type ProductState = {
  fetchedProducts: Product[];
};

const initialProductState: ProductState = {
  fetchedProducts: [
    {
      id: 1,
      title: 'title',
      description:
        'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
      price: '12',
      category: 'car',
      image: productImg,
      rating: {
        count: 1,
        rate: 4
      }
    },
    {
      id: 2,
      title: 'title',
      description:
        'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
      price: '12',
      category: 'car',
      image: productImg,
      rating: {
        count: 1,
        rate: 4
      }
    },
    {
      id: 3,
      title: 'title',
      description:
        'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
      price: '12',
      category: 'car',
      image: productImg,
      rating: {
        count: 1,
        rate: 4
      }
    }
  ]
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    getFetchedProducts(state, action) {
      state.fetchedProducts = action.payload;
    }
  }
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
