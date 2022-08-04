import '../src/index.css';
import Navigation from './components/layout/Navigation';
import ProductsPage from './pages/ProductsPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { getStoredCartItems } from './store/cart-actions';
import { storeCartItems } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  useEffect(() => {
    dispatch(getStoredCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(storeCartItems(cartItems));
  }, [dispatch, cartItems]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
