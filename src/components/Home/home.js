import React from "react";
import Tab from "../Tabs/tabs";

import Rectangle from "../../assests/Icons/Rectangle.jpg";

import shoes2 from "../../assests/Icons/shoes2.png";
import shoes3 from "../../assests/Icons/shoes3.png";
import shoes4 from "../../assests/Icons/shoes4.png";
import { Link } from "react-router-dom";
import Products from "../Product/products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        {/* <img src={Rectangle} className="card-img" alt="Background"  /> */}
        {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">

          <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVAL</h5>
          <p className="card-text lead fs-2">
            CHECKOUT ALL THE TRENDS
          </p>
          </div>
        </div> */}
        <Products/>
      </div>
    </div>
  );
}

export default Home;
