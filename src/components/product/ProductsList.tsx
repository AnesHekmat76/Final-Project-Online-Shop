import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/product-actions';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();

  const productStatus = useSelector((state: RootState) => state.product.productStatus);
  const productItems = useSelector((state: RootState) => state.product.filteredProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productItemsList = productItems.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  if (productStatus) {
    return (
      <div className="mt-16">
        <h2 className="text-xl text-gray-500 text-center">{productStatus}</h2>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:flex sm:flex-row sm:flex-wrap justify-center px-6 sm:px-2 lg:mt-10">
      {productItemsList}
    </div>
  );
};
export default ProductsList;
