import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';

type ProductState = {
  fetchedProducts: Product[];
  fetchedCategories: string[];
  selectedCategory: string;
  searchedText: string;
  productStatus: string;
  filteredProducts: Product[];
};

const initialProductState: ProductState = {
  fetchedProducts: [],
  fetchedCategories: [],
  selectedCategory: 'all',
  searchedText: '',
  productStatus: 'Loading...',
  filteredProducts: []
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    setFetchedProducts(state, action) {
      if (action.payload.length === 0) {
        state.productStatus = 'No product found';
        return;
      }
      state.productStatus = '';
      state.fetchedProducts = action.payload;
      state.filteredProducts = action.payload;
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
      //filter by cat:
      state.productStatus = '';
      state.selectedCategory = action.payload;
      if (action.payload === 'all') {
        state.filteredProducts = state.fetchedProducts;
      } else {
        const filteredProductsByCategory = state.fetchedProducts.filter(
          (product) => product.category === action.payload
        );
        state.filteredProducts = filteredProductsByCategory;
      }

      if (state.searchedText.trim() === '') {
        return;
      }
      //filter by search:
      const filteredProductsBySearch = state.filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(state.searchedText.trim().toLowerCase());
      });
      state.filteredProducts = filteredProductsBySearch;
      if (filteredProductsBySearch.length === 0) state.productStatus = 'No product found';
    },
    setUserSearch(state, action) {
      state.searchedText = action.payload;
    },
    filterProductsBySearch(state, action) {
      state.productStatus = '';
      if (state.selectedCategory === 'all') {
        state.filteredProducts = state.fetchedProducts;
      } else {
        const filteredProductsByCategory = state.fetchedProducts.filter(
          (product) => product.category === state.selectedCategory
        );
        state.filteredProducts = filteredProductsByCategory;
      }

      if (state.searchedText.trim() === '') {
        return;
      }
      const filteredProductsBySearch = state.filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(state.searchedText.trim().toLowerCase());
      });
      state.filteredProducts = filteredProductsBySearch;
      if (filteredProductsBySearch.length === 0) state.productStatus = 'No product found';
    },

    changeProductMessage(state, action) {
      console.log('mesage');
      state.productStatus = action.payload;
    },
    backToInitialState() {
      return initialProductState;
    }
  }
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
