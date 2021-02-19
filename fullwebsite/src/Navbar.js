import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <div className="nav-logo">
            <i className="fas fa-bars"></i>
            <h3>Amazona</h3>
          </div>
        </Link>

        <ul className="menu-item">
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
              {cartItems ? (
                <span className="cart-badge">{cartItems.length}</span>
              ) : (
                ''
              )}
            </Link>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Seller
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Admin
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
