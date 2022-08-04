import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartArr = cartItems.map((cartItem, index) => {
    return <CartItem key={index} product={cartItem} number={index + 1} />;
  });

  return (
    <div className="mt-10 md:mt-14">
      <CartHeader />
      {cartArr}
      <CartFooter />
    </div>
  );
};
export default Cart;
