import LogoImage from '../../assets/amazon3.png';
import React from 'react';
const Logo = () => {
  return (
    <div className="mt-1">
      <img className="w-full h-7 sm:h-8 md:h-9 rounded-md" alt="Logo" src={LogoImage}></img>
    </div>
  );
};
export default React.memo(Logo);
