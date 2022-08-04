import ProductsList from '../components/product/ProductsList';
import SearchSection from '../components/searchSection/SearchSection';
import { useEffect } from 'react';
import { productAction } from '../store/product-slice';
import { useDispatch } from 'react-redux';

const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(productAction.backToInitialState());
    };
  }, [dispatch]);

  return (
    <>
      <SearchSection />
      <ProductsList />
    </>
  );
};
export default ProductsPage;
