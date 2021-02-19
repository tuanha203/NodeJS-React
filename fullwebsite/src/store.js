import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducerListProducts } from './reducers/reducerListProducts';
import thunk from 'redux-thunk';
import { reducerDetailProduct } from './reducers/reducerDetailProduct';
import { reducerAddToCart } from './reducers/reducerAddToCart';
const allReducer = combineReducers({
  products: reducerListProducts,
  detailProduct: reducerDetailProduct,
  cart: reducerAddToCart,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const init = {
  cart: {
    cartItems: localStorage.getItem('cartItems') != 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

const store = createStore(
  allReducer,
  init,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
