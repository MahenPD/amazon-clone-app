import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div class="checkout__left">
        <img className="checkout__ad" src="" alt="" />

        <div>
          <h2 class="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div class="checkout__right">
          <Subtotal />
        <h2>THe subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
