import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const CartButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  let totalCartQuantity = 0;
  cartItems.forEach((cartItem) => {
    totalCartQuantity += cartItem.quantity;
  });
  return (
    <div className="flex items-center justify-center ml-7 hover:opacity-60 transition-opacity transition-duration: 150ms">
      <h4 className="mr-1.5 text-sm sm:text-base md:text-lg inline-block">Cart</h4>
      <Avatar
        sx={{
          backgroundColor: '#e25141',
          width: '24px',
          height: '24px',
          fontSize: '14px'
        }}
        alt="Remy Sharp"
        src="/broken-image.jpg">
        {totalCartQuantity}
      </Avatar>
    </div>
  );
};
export default CartButton;
