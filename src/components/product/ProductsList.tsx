import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/product-actions';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const productItems = useSelector((state: RootState) => state.product.filteredProductsBySearch);
  const productMessage = useSelector((state: RootState) => state.product.productStatus);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = productItems.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  if (productMessage) {
    return (
      <div className="mt-16">
        <h2 className="text-xl text-gray-500 text-center">{productMessage}</h2>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:flex sm:flex-row sm:flex-wrap justify-center px-6 sm:px-2 lg:mt-10">
      {products}
    </div>
  );
};
export default ProductsList;
