import Button from '../UI/Button';

type product = {
  id: number;
  title: string;
  description: string;
  more: string;
  price: string;
  image: string;
};

const ProductItem: React.FC<{ product: product; key: number }> = (props) => {
  const { title, description, more, price, image } = props.product;
  return (
    <div className="border rounded-md border-gray-200 shadow-md mb-4 w-full sm:w-46/100 sm:mx-2 md:mx-3 lg:w-3/10 xl:mx-5">
      <div className="pt-4">
        <img className="mx-auto object-cover object-center h-64" alt="product" src={image}></img>
      </div>

      <div className="p-4 xl:p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <p className="mt-4 text-sm">{more}</p>
        <div className="mt-5 flex justify-between items-center">
          <p className="text-sm">{price} 0.0$</p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
