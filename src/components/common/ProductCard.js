import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-bold mb-3">{product.name}</h2>
      <p className="text-gray-600 mb-3">₹ {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
