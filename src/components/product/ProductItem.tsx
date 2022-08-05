import React from 'react';
import Button from '../UI/Button';
import './ProductItem.css';
import Product from '../../types/product';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const ProductItem: React.FC<{ product: Product; key: number }> = (props) => {
  const { id, title, description, price, image } = props.product;
  const dispatch = useDispatch();

  const addToCartEventHandler = useCallback(() => {
    const selectedProduct = {
      id,
      title,
      description,
      price,
      quantity: 1
    };
    dispatch(cartAction.addItem(selectedProduct));
  }, [id, title, description, price, dispatch]);
  return (
    <div className="border rounded-md border-gray-200 shadow-md mb-4 w-full sm:w-46/100 sm:mx-2 md:mx-3 lg:w-3/10 xl:mx-5">
      <div className="p-2 h-64 flex justify-center items-center">
        <img
          className="object-cover object-center h-11/12 sm:h-10/12 lg:h-12/12"
          alt="product"
          src={image}></img>
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
          <Button onClick={addToCartEventHandler} />
        </div>
      </div>
    </div>
  );
};
export default React.memo(ProductItem);
