import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        setProducts(response.data.slice(0, 13)); // display first 13 items
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center font-bold text-3xl text-gray-500 mt-[12rem]">Loading...</p>;
  
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">Ecommerce  Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.images[0] || product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-800 font-bold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
