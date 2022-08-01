import SearchBox from '../searchPart/SearchBox';
import DropDown from '../searchPart/DropDown';
import ProductItem from '../product/ProductItem';

const Main = () => {
  return (
    <div className="">
      <div className="px-6 sm:px-4 md:px-3 lg:px-5 sm:flex justify-center lg:w-2/3 lg:pl-6 lg:pr-0 xl:pl-4 xl:pr-0 mt-6 md:mt-8">
        <SearchBox />
        <DropDown />
      </div>
      <div className="mt-8 sm:flex sm:flex-row sm:flex-wrap justify-center px-6 sm:px-2 lg:mt-10">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};
export default Main;
