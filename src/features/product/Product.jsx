import React from "react";
import ProductCard from "./ProductCard";

const Product = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Product;
