import React, { useState, useEffect } from "react";
import Loading from "react-loading";
import { Link } from "react-router-dom";
import './product.css'

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProducts = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => filterProducts("jewelery")}
          >
            
            Jwelery
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.length > 0 &&
          filter.map((products, key) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div
                    className="card h-100 text-center p-4"
                    key={products.id}
                    style={{ color: "black" }}
                  >
                    <img
                      src={products.image}
                      className="card-img-top"
                      alt={products.title}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {products.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">
                        ${products.price}
                      </p>
                      <Link
                        to={`/products/${products.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5 bg-dark">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder test-center">Latest Products</h1>
            <hr />
          </div>

          {loading ? (
            <div className='loadingdiv'>
            <Loading
              color="white"
              type="spinningBubbles"
              height={100}
              width={100}
            />
            </div>
          ) : (
            <ShowProducts />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
