import { AppDispatch } from './index';
import { userAction } from './user-slice';

export const getUserDetails = (): any => {
  return (dispatch: AppDispatch) => {
    fetch('https://fakestoreapi.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        dispatch(userAction.getUserName(data.name.firstname));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};
