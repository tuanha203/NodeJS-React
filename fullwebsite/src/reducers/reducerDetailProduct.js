import {
  PRODUCTDETAIL_FAIL,
  PRODUCTDETAIL_LOADING,
  PRODUCTDETAIL_SUCCESS,
} from '../constants/constProduct';

export const reducerDetailProduct = (
  state = { product: [], loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCTDETAIL_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case PRODUCTDETAIL_SUCCESS:
      return {
        product: action.payload,
        loading: false,
      };
    case PRODUCTDETAIL_LOADING:
      return {
        loading: true,
      };
    default:
      return state;
  }
};
