import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';

type ProductState = {
  fetchedProducts: Product[];
  fetchedCategories: string[];
  filteredProductsByCategory: Product[];
  filteredProductsBySearch: Product[];
  selectedCategory: string;
  searchedText: string;
  fetchLoading: boolean;
  productMessage: string;
};

const initialProductState: ProductState = {
  fetchedProducts: [],
  fetchedCategories: [],
  filteredProductsByCategory: [],
  filteredProductsBySearch: [],
  selectedCategory: '',
  searchedText: '',
  fetchLoading: true,
  productMessage: 'Loading...'
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    getFetchedProducts(state, action) {
      if (action.payload.length === 0) {
        state.productMessage = 'No product found';
      }
      state.productMessage = '';
      state.fetchedProducts = action.payload;
      state.filteredProductsByCategory = action.payload;
      state.filteredProductsBySearch = action.payload;
      //create an array of unique categories:
      const productCategories: string[] = action.payload.map((product: Product) => {
        return product.category;
      });
      const uniqueCategories: string[] = [];
      productCategories.forEach((category) => {
        if (!uniqueCategories.includes(category)) {
          uniqueCategories.push(category);
        }
      });
      state.fetchedCategories = uniqueCategories;
    },
    filterProductsByCategory(state, action) {
      state.productMessage = '';
      if (state.searchedText !== '') state.searchedText = '';
      if (action.payload === 'all') {
        state.filteredProductsByCategory = state.fetchedProducts;
        state.filteredProductsBySearch = state.fetchedProducts;
        state.selectedCategory = action.payload;
        return;
      }
      state.selectedCategory = action.payload;
      const filteredProducts = state.fetchedProducts.filter(
        (product) => product.category === action.payload
      );
      state.filteredProductsByCategory = filteredProducts;
      state.filteredProductsBySearch = filteredProducts;
    },
    userSearch(state, action) {
      state.searchedText = action.payload;
    },
    filterProductsBySearch(state, action) {
      state.productMessage = '';
      state.filteredProductsBySearch = state.filteredProductsByCategory.filter((product) => {
        return product.title.toLowerCase().includes(action.payload.trim().toLowerCase());
      });
      if (state.filteredProductsBySearch.length === 0) state.productMessage = 'No product found';
    },
    changeProductMessage(state, action) {
      state.productMessage = action.payload;
    }
  }
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
