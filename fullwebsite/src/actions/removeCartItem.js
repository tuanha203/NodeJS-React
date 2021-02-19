import { REMOVE_CART_ITEM } from '../constants/constAddToCart';

export const removeCartItem = (id) => (disPatch, getState) => {
  disPatch({ type: REMOVE_CART_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
