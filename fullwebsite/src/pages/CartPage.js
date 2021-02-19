import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/addToCart';
import {removeCartItem} from '../actions/removeCartItem';

function CartPage(props) {
  const { id } = props.match.params;
  const qty = props.location.search.split('=')[1];
  const cartItems = useSelector((state) => state.cart.cartItems);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(addToCart(id, qty));
  }, []);

  const checkOutHandle = () => {
    props.history.push('/signin?redirect=shipping');
  };

  const removeCartItemHandle = (id) => {
    disPatch(removeCartItem(id));
  };

  return (
    <div className="cartpage">
      <div className="cart-list">
        <h3>Shopping Cart</h3>
        <ul>
          {cartItems.length > 0
            ? cartItems.map((item) => {
                return (
                  <li key={item.id} className="cart-item">
                    <img src={item.url} alt="" />
                    <h4 className="cart-item__name">{item.name}</h4>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        disPatch(addToCart(item.id, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <h4 className="cart-price">${item.price}</h4>
                    <button
                      className="cart-btn__del"
                      onClick={() => removeCartItemHandle(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            : 'Empty Cart'}
        </ul>
      </div>
      <div className="cart-price__total">
        <h3>
          Subtotal{' '}
          {cartItems.reduce((a, b) => {
            return a + Number(b.qty);
          }, 0)}{' '}
          items : $
          {cartItems.reduce((a, b) => {
            return a + b.qty * b.price;
          }, 0)}
        </h3>
        <button onClick={() => checkOutHandle()}>Proceed to check out</button>
      </div>
    </div>
  );
}

export default CartPage;
