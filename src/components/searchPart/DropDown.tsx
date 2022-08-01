const DropDown = () => {
  return (
    <div className="mt-6 sm:w-46/100 sm:ml-3 sm:mt-0 lg:ml-4">
      <select className="text-sm px-2 w-full h-9 border-b border-gray-400 cursor-pointer outline-none">
        <option>Category</option>
        <option>Computer </option>
        <option> Watch</option>
      </select>
    </div>
  );
};
export default DropDown;
