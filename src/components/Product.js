import React from "react";
import "./Product.css";

function Product(props) {
  const { title, image, price, rating } = props;

  return (
    <div className="product">
      <div class="product__info">
        <p>{title}</p>
        <p class="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>start</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
