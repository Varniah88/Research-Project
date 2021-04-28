import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ product, showViewProductButton = true }) => {
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2">
            View Product
          </button>
        </Link>
      )
    );
  };

  const isDiscountAvailable = () => {
    if (product.discount === 0) {
      return false;
    } else {
      return true;
    }
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock</span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock</span>
    );
  };

  return (
    <div className="card" style={{ width: 350, height: 430, margin: 1 }}>
      <div
        className="card-header border-danger name text-center"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        {product.name}
      </div>
      <div className="card-body">
        <div className="card-img-top" style={{ width: 100, height: 150 }}>
          <ShowImage item={product} url="product" />
        </div>

        <p
          style={{
            textDecoration: isDiscountAvailable() ? "line-through" : "none",
            display: "inline",
            paddingRight: "20px",
          }}
          className=""
        >
          Rs.{product.price}
        </p>

        <p
          style={{
            display: isDiscountAvailable() ? "inline" : "none",
            color: "green",
          }}
        >
          Discount:{product.discount}%
        </p>

        <div>
          <p
            style={{
              display: isDiscountAvailable() ? "inline-block" : "none",
              color: "orange",
            }}
            className=" mt-2"
          >
            Price with Discount: Rs.{product.discountprice}
          </p>
        </div>

        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}
      </div>
    </div>
  );
};

export default Card;
