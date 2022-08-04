import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const CartFooter = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  let cartTotalPrice = 0;
  cartItems.forEach((cartItem) => {
    cartTotalPrice += cartItem.price * cartItem.quantity;
  });
  cartTotalPrice = +cartTotalPrice.toFixed(2);
  return (
    <div className="border border-gray-800 flex justify-start px-2 py-4">
      <p className="text-xs md:text-sm lg:text-base w-2/12 lg:w-1/12 text-center">Total</p>
      <div className="w-62/100 lg:w-70.5/100" />
      <p className="text-xs md:text-sm lg:text-base w-2/12 text-center">{cartTotalPrice} $</p>
    </div>
  );
};
export default CartFooter;
