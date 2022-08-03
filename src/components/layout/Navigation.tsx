import UserProfile from './UserProfile';
import CartButton from './CartButton';
import Logo from './Logo';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <header className="bg-gray-200 w-full flex justify-between px-4 py-2 md:py-3 md:px-6">
      <UserProfile />
      <Link to="/products">
        <Logo />
      </Link>
      <Link className="flex" to="./cart">
        <CartButton />
      </Link>
    </header>
  );
};
export default Navigation;
