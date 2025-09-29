"use client";

import { useState } from 'react';
import { useCart } from './CartProvider';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="rounded-2xl transition-all duration-300">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
        {product.name}
      </h3>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[1.5rem]">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        
        <button
          onClick={handleAddToCart}
          className={`pointer-cursor w-28 px-1 py-1 rounded-xl font-medium transition-all duration-300
            ${isAdding 
              ? 'bg-green-500 text-white scale-95' 
              : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg active:scale-95'
            }
          `}
          disabled={isAdding}
        >
          {isAdding ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}