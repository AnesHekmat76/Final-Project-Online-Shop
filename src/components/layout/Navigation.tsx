import UserProfile from './UserProfile';
import CartButton from './CartButton';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getUserDetails } from '../../store/user-action';

const Navigation = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.userName);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <header className="bg-gray-200 w-full flex justify-between px-4 py-1 md:py-2 md:px-6">
      <UserProfile userName={userName} />
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
