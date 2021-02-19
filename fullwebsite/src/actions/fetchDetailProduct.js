import axios from 'axios';
import { PRODUCTDETAIL_FAIL, PRODUCTDETAIL_LOADING, PRODUCTDETAIL_SUCCESS } from '../constants/constProduct';

export const fetchDetailProduct = (productId) => async (disPatch) => {
  disPatch({
    type: PRODUCTDETAIL_LOADING,
  });
  try {
    const {data} = await axios.get(`/api/product/${productId}`);
    disPatch({
      type: PRODUCTDETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disPatch({
      type: PRODUCTDETAIL_FAIL,
      payload: error.response.data ? error.response.data : error.message,
    });
  }
};
