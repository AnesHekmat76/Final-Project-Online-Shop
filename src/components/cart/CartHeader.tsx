const CartHeader = () => {
  return (
    <div
      style={{ backgroundColor: '#9e9e9e' }}
      className="flex justify-start bg-gray-400 px-2 py-4 text-white border border-x-gray-800 border-t-gray-800 sticky top-11 md:top-14">
      <p className="text-xs md:text-sm lg:text-base w-2/12 lg:w-1/12 text-center">Number</p>
      <p className="text-xs md:text-sm lg:text-base w-3/12 lg:w-2/12 text-center">Title</p>
      <p className="text-xs md:text-sm lg:text-base w-3/12 text-center hidden lg:block">
        Description
      </p>
      <p className="text-xs md:text-sm lg:text-base w-3/12 lg:w-2/12 text-center">Quantity</p>
      <p className="text-xs md:text-sm lg:text-base w-12/100 text-center">Price</p>
      <p className="text-xs md:text-sm lg:text-base w-2/12 text-center">Total Price</p>
    </div>
  );
};
export default CartHeader;
