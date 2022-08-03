import LogoImage from '../../assets/Logo.png';
const Logo = () => {
  return (
    <div className="mt-1">
      <img className="w-full h-8 md:h-10 rounded-md" alt="Logo" src={LogoImage}></img>
    </div>
  );
};
export default Logo;
