import {
  PRODUCTLIST_FAIL,
  PRODUCTLIST_LOADING,
  PRODUCTLIST_SUCCESS,
} from '../constants/constProduct';

const intial = {
  listProducts: [],
  error: false,
  loading: true,
};

const reducerListProducts = (state = intial, action) => {
  switch (action.type) {
    case PRODUCTLIST_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case PRODUCTLIST_LOADING:
      return {
        loading: true,
      };
    case PRODUCTLIST_SUCCESS:
      return {
        loading: false,
        listProducts: action.payload,
      };
    default:
      return state;
  }
};

export { reducerListProducts };
