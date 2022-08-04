import LogoImage from '../../assets/Logo.png';
import React from 'react';
const Logo = () => {
  return (
    <div className="mt-1">
      <img className="w-full h-8 md:h-10 rounded-md" alt="Logo" src={LogoImage}></img>
    </div>
  );
};
export default React.memo(Logo);
