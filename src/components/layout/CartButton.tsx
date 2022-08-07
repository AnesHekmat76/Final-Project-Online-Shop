import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import React from 'react';
import { useMemo } from 'react';

const CartButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalCartQuantity = useMemo(() => {
    let totalQuantity = 0;
    cartItems.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
    return totalQuantity;
  }, [cartItems]);

  return (
    <div className="flex items-center justify-end w-28 lg:w-32 hover:opacity-60 transition-opacity transition-duration: 150ms">
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
export default React.memo(CartButton);
