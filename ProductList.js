import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Top {products.length} Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
