'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/productcards/ProductCard'; // Adjust the path as needed

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} productName={product.name} />
      ))}
    </div>
  );
};

export default ProductCatalog;