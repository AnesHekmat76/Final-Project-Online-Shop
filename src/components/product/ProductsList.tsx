import productImg from '../../assets/product.jpg';
import ProductItem from './ProductItem';
const productsArr = [
  {
    id: 1,
    title: 'title',
    description:
      'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
    more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
    price: '12',
    image: productImg
  },
  {
    id: 2,
    title: 'title',
    description:
      'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
    more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
    price: '12',
    image: productImg
  },
  {
    id: 3,
    title: 'title',
    description:
      'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem ipsum may be used as a placeholder before final.',
    more: 'publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem',
    price: '12',
    image: productImg
  }
];
// type product = {
//   id: number;
//   title: string;
//   description: string;
//   more: string;
//   price: string;
//   image: string;
// };

const ProductsList = () => {
  const products = productsArr.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  return (
    <div className="mt-8 sm:flex sm:flex-row sm:flex-wrap justify-center px-6 sm:px-2 lg:mt-10">
      {products}
    </div>
  );
};
export default ProductsList;
