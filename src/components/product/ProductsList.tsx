// import productImg from '../../assets/product.jpg';
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productAction } from '../../store/product-slice';
import { useDispatch } from 'react-redux';

// const productsArr = [
//   {
//     id: 1,
//     title: 'title',
//     description:
//       'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
//     more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
//     price: '12',
//     image: productImg
//   },
//   {
//     id: 2,
//     title: 'title',
//     description:
//       'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
//     more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
//     price: '12',
//     image: productImg
//   },
//   {
//     id: 3,
//     title: 'title',
//     description:
//       'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
//     more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
//     price: '12',
//     image: productImg
//   }
// ];

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const productItems = useSelector((state: RootState) => state.product.fetchedProducts);
  const products = productItems.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
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
