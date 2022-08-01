import UserProfile from './UserProfile';
import CartButton from './CartButton';
import Logo from './Logo';
const Navigation = () => {
  return (
    <header className="bg-gray-200 w-full flex justify-between px-4 py-2 md:py-3 md:px-6">
      <UserProfile />
      <Logo />
      <CartButton />
    </header>
  );
};
export default Navigation;
