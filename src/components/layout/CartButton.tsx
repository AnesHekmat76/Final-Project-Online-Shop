import Avatar from '@mui/material/Avatar';
const CartButton = () => {
  return (
    <a
      href="./s=123"
      className="flex items-center justify-center ml-7 hover:opacity-60 transition-opacity transition-duration: 150ms">
      <h4 className="mr-1.5 text-lg inline-block">Cart</h4>
      <Avatar
        sx={{
          backgroundColor: '#e25141',
          width: '24px',
          height: '24px',
          fontSize: '14px'
        }}
        alt="Remy Sharp"
        src="/broken-image.jpg">
        2
      </Avatar>
    </a>
  );
};
export default CartButton;
