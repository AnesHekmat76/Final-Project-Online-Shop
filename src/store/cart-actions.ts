import { cartAction } from './cart-slice';
import { AppDispatch } from '.';
import cartItem from '../models/cartItem';
// export const storeToDos = (todoItems: Todo[]): any => {
//   return () => {
//     localStorage.setItem('toDos', JSON.stringify(todoItems));
//   };
// };

// export const getStoredToDos = (): any => {
//   return (dispatch: AppDispatch) => {
//     const savedTasks = JSON.parse(localStorage.getItem('toDos') || '');
//     if (savedTasks.length > 0) {
//       dispatch(todoActions.getToDosFromLocalStorage(savedTasks));
//     }
//   };
// };
export const storeCartItems = (cartItems: cartItem[]): any => {
  return () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
};

export const getStoredCartItems = (): any => {
  return (dispatch: AppDispatch) => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '');
    if (storedCartItems.length > 0) {
      dispatch(cartAction.getStoredCartItems(storedCartItems));
    }
  };
};
