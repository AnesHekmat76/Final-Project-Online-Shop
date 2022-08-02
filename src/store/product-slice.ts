import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';
import productImg from '../assets/product.jpg';

type ProductState = {
  fetchedProducts: Product[];
  fetchedCategories: string[];
  filteredProductsByCategory: Product[];
  filteredProductsBySearch: Product[];
  selectedCategory: string;
  searchedText: string;
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
  ],
  fetchedCategories: [],
  filteredProductsByCategory: [],
  filteredProductsBySearch: [],
  selectedCategory: '',
  searchedText: ''
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    getFetchedProducts(state, action) {
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
    categorySelect(state, action) {
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
      state.filteredProductsBySearch = state.filteredProductsByCategory.filter((product) => {
        return product.title.toLowerCase().includes(action.payload.trim().toLowerCase());
      });
    }
  }
});

export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;
