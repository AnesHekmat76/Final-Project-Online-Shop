import productImg from '../../assets/product.jpg';
const ProductItem = () => {
  return (
    <div className="border rounded-md border-gray-200 shadow-md mb-4 w-full sm:w-46/100 sm:mx-2 md:mx-3 lg:w-3/10 xl:mx-5">
      <div className="pt-4">
        <img
          className="mx-auto object-cover object-center h-64"
          alt="product"
          src={productImg}></img>
      </div>

      <div className="p-4 xl:p-6">
        <h3 className="text-xl font-semibold">Title</h3>
        <p className="mt-2 text-sm">
          publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem
          ipsum may be used as a placeholder before final.
        </p>
        <p className="mt-4 text-sm">
          publishing and graphic design, Lorem ipsum is a placeholder text commonly used to Lorem
        </p>
        <div className="mt-5 flex justify-between items-center">
          <p className="text-sm">Price 0.0$</p>
          <button className="rounded-sm text-sm bg-btn-blue text-white px-5 py-1.5 hover:opacity-80 transition-opacity transition-duration: 150ms shadow-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
