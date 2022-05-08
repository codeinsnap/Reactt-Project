import React from "react";
import Products from "../Product/products";
import Slider from "../Carousel/slider";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <Slider/>
        <Products/>
      </div>
    </div>
  );
}

export default Home;
