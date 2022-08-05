import { AppDispatch } from './index';
import { productAction } from './product-slice';

export const getProducts = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=40');
      if (response.status > 399) {
        throw new Error('Some thing went wrong');
      }
      dispatch(productAction.changeProductMessage);
      const data = await response.json();
      dispatch(productAction.setFetchedProducts(data));
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      dispatch(productAction.changeProductMessage(message));
    }
  };
};
