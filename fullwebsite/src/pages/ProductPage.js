import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/addToCart';
import { fetchDetailProduct } from '../actions/fetchDetailProduct';
import ErrorMessage from '../components/ErrorMessage';
import LoadingBox from '../components/LoadingBox';
import Rating from '../components/Rating';
function ProductPage(props) {
  const { product, error, loading } = useSelector(
    (state) => state.detailProduct,
  );
  const { id } = useParams();
  const disPatch = useDispatch();

  const [qty, setQty] = useState(1);

  const handleAddCart = () => {
    props.history.push(`/cart/${id}?qty=${qty}`);
  }

  useEffect(() => {
    disPatch(fetchDetailProduct(id));
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div className="product-page">
          <div className="product-page__img">
            <img src={product.url} alt="" />
          </div>
          <div className="product-page__info">
            <h3 className="product-page__name">{product.name}</h3>
            <div className="product-page__rating">
              <Rating stars={product.stars} />
              <h4 className="product-page__review">
                {product.reviews} reviews
              </h4>
            </div>
            <h3 className="product-page__price">Price: ${product.price}</h3>
            <h3 className="product-page__des">
              Description: <br />{' '}
              <span style={{ color: 'blue' }}>Very Good</span>{' '}
            </h3>
          </div>
          <div className="add-to-cart">
            <div className="cart-price">
              <h3>Price</h3>
              <h3>${product.price}</h3>
            </div>
            <div className="cart-status">
              <h3>Status</h3>
              <h3>{product.countInStock > 0 ? 'In Stock' : 'Over'}</h3>
            </div>

            <div className="cart-select-qty">
              <h3>Select</h3>
              {product.countInStock > 0 && (
                <>
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>

            <button onClick={() => handleAddCart()} className="submit-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
