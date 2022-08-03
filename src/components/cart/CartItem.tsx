import MinusIcon from '../UI/icons/MinusIcon';
import PlusIcon from '../UI/icons/PlusIcon';
import TrashIcon from '../UI/icons/TrashIcon';

type cartItem = {
  title: string;
  description: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

const CartItem: React.FC<{ product: cartItem; number: number }> = ({ product, number }) => {
  let backGround = 'white';
  if (number % 2 !== 0) {
    backGround = '#e6e6e6';
  }
  const plusButtonClick = () => {
    console.log('plus');
  };
  const minusButtonClick = () => {
    console.log('minus');
  };
  const trashButtonClick = () => {
    console.log('trash');
  };
  return (
    <div
      style={{ backgroundColor: backGround }}
      className="flex justify-start items-center px-2 py-4 text-black border border-x-gray-800 border-t-gray-800">
      <p className="text-xs md:text-sm lg:text-base w-2/12 lg:w-1/12 text-center">{number}</p>
      <p className="text-xs md:text-sm lg:text-base w-3/12 lg:w-2/12 text-center">
        {product.title}
      </p>
      <p className="text-xs md:text-sm lg:text-base w-3/12 text-center hidden lg:block">
        {product.description}
      </p>
      <div className="flex justify-center w-3/12 lg:w-2/12">
        <button onClick={minusButtonClick}>
          <MinusIcon className="text-cart-red hover:opacity-80 transition" />
        </button>
        <p className="text-xs md:text-sm lg:text-base text-center mx-2 md:mx-3">
          {product.quantity}
        </p>
        <button onClick={plusButtonClick}>
          <PlusIcon className="text-plus-icon-blue hover:opacity-80 transition" />
        </button>
      </div>
      <p className="text-xs md:text-sm lg:text-base w-12/100 text-center">{product.price} $</p>
      <p className="text-xs md:text-sm lg:text-base w-2/12 text-center">{product.totalPrice} $</p>
      <button onClick={trashButtonClick}>
        <TrashIcon className="bg-cart-red rounded-full text-white p-1 hover:opacity-80 transition" />
      </button>
    </div>
  );
};
export default CartItem;
