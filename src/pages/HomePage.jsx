import Header from "../features/header/Header";
import Product from "../features/product/Product";
import Cart from "../features/cart/Cart";

import React from "react";

const products = [
  { id: 1, name: "name1", price: 100, stock: 1 },
  { id: 2, name: "name2", price: 200, stock: 2 },
  { id: 3, name: "name3", price: 300, stock: 3 },
  { id: 4, name: "name4", price: 400, stock: 4 },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <Product products={products} />
      <Cart />
    </>
  );
};

export default HomePage;
