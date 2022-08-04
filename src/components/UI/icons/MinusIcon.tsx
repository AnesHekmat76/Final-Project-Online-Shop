import React from 'react';
const MinusIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default React.memo(MinusIcon);
