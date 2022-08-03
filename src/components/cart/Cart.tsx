import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItem from './CartItem';

const cartItemsArr = [
  {
    title: 'car',
    description: 'cherto pert',
    price: 4,
    quantity: 2,
    totalPrice: 8
  },
  {
    title: 'car',
    description: 'cherto pert',
    price: 4,
    quantity: 2,
    totalPrice: 8
  },
  {
    title: 'car',
    description: 'cherto pert',
    price: 4,
    quantity: 2,
    totalPrice: 8
  },
  {
    title: 'car',
    description: 'cherto pert',
    price: 4,
    quantity: 2,
    totalPrice: 8
  }
];

const cartArr = cartItemsArr.map((item, index) => {
  return <CartItem key={index} product={item} number={index + 1} />;
});

const Cart = () => {
  return (
    <div className="mt-10 md:mt-14">
      <CartHeader />
      {cartArr}
      <CartFooter />
    </div>
  );
};
export default Cart;
