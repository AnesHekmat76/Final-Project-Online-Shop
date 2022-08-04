import '../src/index.css';
import Navigation from './components/layout/Navigation';
import ProductsPage from './pages/ProductsPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartAction } from './store/cart-slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartAction.getStoredCartItems());
  }, [dispatch]);

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
