import Button from '../UI/Button';
import './ProductItem.css';
import Product from '../../models/product';

const ProductItem: React.FC<{ product: Product; key: number }> = (props) => {
  const { title, description, price, image } = props.product;
  return (
    <div className="border rounded-md border-gray-200 shadow-md mb-4 w-full sm:w-46/100 sm:mx-2 md:mx-3 lg:w-3/10 xl:mx-5">
      <div className="pt-4">
        <img className="mx-auto object-cover object-center h-64" alt="product" src={image}></img>
      </div>

      <div className="p-4 xl:p-6">
        <h3 className="text-xl font-semibold limit-line-1">
          {title.length > 22 ? `${title.substring(0, 30)}...` : title}
        </h3>
        <p className="mt-3 text-sm lg:text-base limit-line-2">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
        <div className="mt-5 flex justify-between items-center">
          <p className="text-sm lg:text-md">{price} $</p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
