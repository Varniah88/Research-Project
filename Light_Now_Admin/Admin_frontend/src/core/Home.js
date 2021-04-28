import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Search from "./Search";
import HomeCard from "./HomeCard";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <br />
      <Search />
      <div className="col-sm-12">
        <h2 className="bg-primary text-center text-white">Products </h2>
        <div className="row ">
          {productsByArrival.map((product, i) => (
            <div key={i} className=" m-2">
              <HomeCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
