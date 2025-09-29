"use client";

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products);
      } else {
        setError('Failed to load products');
      }
    } catch (err) {
      setError('Error fetching products: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="glass-morphism rounded-2xl p-6 animate-pulse">
            <div className="w-full h-64 bg-gray-300/50 rounded-xl mb-4" />
            <div className="h-6 bg-gray-300/50 rounded mb-2" />
            <div className="h-4 bg-gray-300/50 rounded mb-4" />
            <div className="flex justify-between items-center">
              <div className="h-8 w-24 bg-gray-300/50 rounded" />
              <div className="h-10 w-28 bg-gray-300/50 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="glass-morphism rounded-2xl p-8 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={fetchProducts}
            className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

 return (
  <div className="max-w-7xl md:mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:p-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
}