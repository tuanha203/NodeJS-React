import { ADD_TO_CART, REMOVE_CART_ITEM } from '../constants/constAddToCart';

export const reducerAddToCart = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id == newItem.id);
      if (existItem) {
        const newCartItems = state.cartItems.map((item) =>
          item.id == existItem.id ? newItem : item
        );
        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload) // action.payload = id
        }
    default:
      return state;
  }
};
