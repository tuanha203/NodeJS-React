import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
function Product(props) {
  return (
    <Link className="product" to={`/product/${props.product._id}`}>
        <div className="product-head">
          <img src={props.product.url} className="product-img" alt="" />
        </div>

        <div className="product-body">
          <h3 className="product-name">{props.product.name}</h3>

          <div className="product-rate">
            <Rating stars={props.product.stars} />
            <h4 className="product-review">{props.product.reviews} reviews</h4>
          </div>
        </div>

        <div className="product-footer">
          <h3 className="product-price">${props.product.price}</h3>

          <h4 className="product-label">{props.product.label}</h4>
        </div>
    </Link>
  );
}

export default Product;
