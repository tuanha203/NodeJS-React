import React, { useEffect } from 'react';
import Product from '../components/Product';
import ErrorMessage from '../components/ErrorMessage';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import fetchListProducts from '../actions/fetchListProducts';
function HomePage(props) {
  const { listProducts, error, loading } = useSelector(
    (state) => state.products
  );
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchListProducts());
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div className="home-container">
          {listProducts.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
