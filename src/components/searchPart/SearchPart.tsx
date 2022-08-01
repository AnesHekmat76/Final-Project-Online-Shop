import DropDown from './DropDown';
import SearchBox from './SearchBox';
const SearchPart = () => {
  return (
    <div className="px-6 sm:px-4 md:px-3 lg:px-5 sm:flex justify-center lg:w-2/3 lg:pl-6 lg:pr-0 xl:pl-4 xl:pr-0 mt-6 md:mt-8">
      <SearchBox />
      <DropDown />
    </div>
  );
};
export default SearchPart;
