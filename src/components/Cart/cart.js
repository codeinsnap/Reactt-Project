import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const product = useSelector((state) => state.handleAddToCart);
 
  return (
    <>
      {product.length > 0  ? product.map((products , key) => {
        
        return (
          <>
            <div className="row py-5">
              <div className="col-md-4">
                <img
                  src={products.image}
                  alt={products.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{products.title}</h3>
                <p className="lead fw-bold">
                  {products.qty} X ${products.price} = ${" "}
                  {products.qty * products.price}
                </p>
                {/* <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleButton(products.qty)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleButton(products)}
                >
                  <i className="fa fa-plus"></i>
                </button> */}
              </div>
            </div>
          </>
        );
      }) : <div>
            <h1> Your Cart Empty </h1>
      </div> }
    </>
  );
};

export default Cart;
