import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img className="home__image" src="" alt="" />

        <div class="home__row">
          <Product title="The lean startup" price={29.99} image="" rating={5} />
          <Product />
        </div>
        <div class="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div class="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
