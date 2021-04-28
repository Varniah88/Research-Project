import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

const Card = ({
  product,
  showViewProductButton = true,
  showRemoveProductButton = false,
}) => {
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
    <div className="card">
      <div
        className="card-header border-danger name text-center"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        {product.name}
      </div>
      <div className="card-body">
        <div className="card-img-top" style={{ width: 250, height: 350 }}>
          <ShowImage item={product} url="product" />
        </div>

        <p className="lead mt-2">
          Description :{product.description.substring(0, 100)}
        </p>

        <p
          style={{
            textDecoration: isDiscountAvailable() ? "line-through" : "none",
          }}
          className=""
        >
          Rs.{product.price}
        </p>

        <div>
          <p
            style={{
              display: isDiscountAvailable() ? "inline-block" : "none",
              color: "green",
            }}
            className=""
          >
            Discount:{product.discount}%
          </p>
        </div>
        <div>
          <p
            style={{
              display: isDiscountAvailable() ? "inline-block" : "none",
              color: "orange",
            }}
            className=""
          >
            Price with Discount: Rs.{product.discountprice}
          </p>
        </div>

        <p className="">
          Category: {product.category && product.category.name}
        </p>
        <p className="" style={{ color: "red" }}>
          Added on {moment(product.createdAt).fromNow()}
        </p>

        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}
      </div>
    </div>
  );
};

export default Card;
