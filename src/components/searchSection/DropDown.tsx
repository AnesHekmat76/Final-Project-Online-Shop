/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productAction } from '../../store/product-slice';
import { useDispatch } from 'react-redux';

const DropDown = () => {
  const dispatch = useDispatch();
  const dropDownValue = useSelector((state: RootState) => state.product.selectedCategory);
  const dropDownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(productAction.filterProductsByCategory(event.target.value));
  };
  const fetchedCategories = useSelector((state: RootState) => state.product.fetchedCategories);
  const categoryOption = fetchedCategories.map((category, index) => {
    const categoryInnerText = category.charAt(0).toUpperCase() + category.slice(1);
    return (
      <option key={index} value={category}>
        {categoryInnerText}
      </option>
    );
  });
  return (
    <div className="mt-6 sm:w-46/100 sm:ml-3 sm:mt-0 lg:ml-4">
      <select
        value={dropDownValue}
        onChange={dropDownChangeHandler}
        className="text-sm px-2 w-full h-9 border-b border-gray-400 cursor-pointer outline-none">
        <option value="all">Category</option>
        {categoryOption}
      </select>
    </div>
  );
};
export default DropDown;
