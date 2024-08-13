import React from "react";
import productsData from "../data.json";
import ProductCard from "./common/ProductCard";

const ProductListPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
