import { useDispatch } from 'react-redux';
import { productAction } from '../../store/product-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';

let isInitial = true;
const SearchBox = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector((state: RootState) => state.product.searchedText);
  const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productAction.userSearch(event.target.value));
  };

  useEffect(() => {
    let timer: any;
    if (!isInitial) {
      timer = setTimeout(() => {
        dispatch(productAction.filterProductsBySearch(searchInputValue));
      }, 600);
    }
    isInitial = false;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchInputValue, dispatch]);

  return (
    <div className="flex items-center sm:w-46/100 sm:mr-3 lg:mr-4">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9 lg:text-base"
          required
          onChange={inputOnChangeHandler}
          value={searchInputValue}
        />
      </div>
    </div>
  );
};
export default SearchBox;
