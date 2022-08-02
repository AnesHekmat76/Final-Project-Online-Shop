// import productImg from '../../assets/product.jpg';
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productAction } from '../../store/product-slice';
import { useDispatch } from 'react-redux';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const productItems = useSelector((state: RootState) => state.product.filteredProductsBySearch);
  const products = productItems.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=100')
      .then((res) => res.json())
      .then((json) => {
        dispatch(productAction.getFetchedProducts(json));
      });
  }, [dispatch]);

  return (
    <div className="mt-8 sm:flex sm:flex-row sm:flex-wrap justify-center px-6 sm:px-2 lg:mt-10">
      {products}
    </div>
  );
};
export default ProductsList;
