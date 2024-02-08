import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="d-flex">
      <div className="fs-4">{product.name}</div>
      <div className="fs-4">{product.price}</div>
      <div className="fs-4">{product.stock}</div>
    </div>
  );
};

export default ProductCard;
