import React from 'react';

function Rating(props) {
  const { stars } = props;
  return (
    <ul className="product-star">
      <li>
        <i
          className={
            stars >= 1
              ? 'fas fa-star'
              : stars >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </li>
      <li>
        <i
          className={
            stars >= 2
              ? 'fas fa-star'
              : stars >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </li>
      <li>
        <i
          className={
            stars >= 3
              ? 'fas fa-star'
              : stars >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </li>
      <li>
        <i
          className={
            stars >= 4
              ? 'fas fa-star'
              : stars >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </li>
      <li>
        <i
          className={
            stars >= 5
              ? 'fas fa-star'
              : stars >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </li>
    </ul>
  );
}

export default Rating;
