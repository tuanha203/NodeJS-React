import axios from 'axios';
import { ADD_TO_CART } from '../constants/constAddToCart';

export const addToCart = (id, qty) => async (disPatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  disPatch({
    type: ADD_TO_CART,
    payload: {
      name: data.name,
      url: data.url,
      price: data.price,
      countInStock: data.countInStock,
      id: data._id,
      qty,
    },
  });
  
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
