import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './product-slice';
import { userReducer } from './user-slice';

const store = configureStore({
  reducer: { product: productReducer, user: userReducer }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
