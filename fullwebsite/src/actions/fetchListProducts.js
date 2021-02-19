import axios from 'axios';
import {
  PRODUCTLIST_FAIL,
  PRODUCTLIST_LOADING,
  PRODUCTLIST_SUCCESS,
} from '../constants/constProduct';

const fetchListProducts = () => async (disPatch) => {
  disPatch({
    type: PRODUCTLIST_LOADING,
    payload: null,
  });
  try {
      const {data} = await axios.get('/api/product');
      disPatch({
      type: PRODUCTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disPatch({
      type: PRODUCTLIST_FAIL,
      payload: error.message,
    });
  }
};

export default fetchListProducts;
