import MinusIcon from '../UI/icons/MinusIcon';
import PlusIcon from '../UI/icons/PlusIcon';
import TrashIcon from '../UI/icons/TrashIcon';
import cartItem from '../../types/cartItem';
import './cartItem.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem: React.FC<{ product: cartItem; number: number }> = ({ product, number }) => {
  const dispatch = useDispatch();
  const { id, title, description, quantity, price } = product;

  let totalPrice = product.price * product.quantity;
  totalPrice = +totalPrice.toFixed(2);
  let backGround = 'white';
  if (number % 2 !== 0) {
    backGround = '#e6e6e6';
  }
  const plusButtonClick = () => {
    const selectedProduct = {
      id,
      title,
      description,
      price,
      quantity: 1
    };
    dispatch(cartAction.addItem(selectedProduct));
  };
  const minusButtonClick = () => {
    dispatch(cartAction.removeItem(id));
  };
  const trashButtonClick = () => {
    dispatch(cartAction.deleteItems(id));
  };
  return (
    <div
      style={{ backgroundColor: backGround }}
      className="flex justify-start items-center px-2 py-4 text-black border border-x-gray-800 border-t-gray-800 text-2xs xs:text-xs md:text-sm lg:text-base">
      <p className="w-2/12 lg:w-1/12 text-center">{number}</p>
      <p className="w-3/12 lg:w-2/12 title-limit-1 lg:px-3">{title}</p>
      <p className="hidden w-3/12 lg:block pl-6 description-limit-2">{description}</p>
      <div className="flex justify-center w-3/12 lg:w-2/12">
        <button onClick={minusButtonClick}>
          <MinusIcon className="text-cart-red hover:opacity-80 transition" />
        </button>
        <p className="text-center mx-2 md:mx-3 w-4">{quantity}</p>
        <button onClick={plusButtonClick}>
          <PlusIcon className="text-plus-icon-blue hover:opacity-80 transition" />
        </button>
      </div>
      <p className="lg:text-base w-12/100 text-center">{price} $</p>
      <p className="w-2/12 text-center">{totalPrice} $</p>
      <button onClick={trashButtonClick}>
        <TrashIcon className="bg-cart-red rounded-full text-white p-1 hover:opacity-80 transition" />
      </button>
    </div>
  );
};
export default CartItem;
