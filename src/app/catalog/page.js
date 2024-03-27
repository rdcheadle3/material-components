'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/productcards/ProductCard'; // Adjust the path as needed
import Link from 'next/link';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Fetching products...');
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={`/catalog/products/${product.id}`} passHref>
          <ProductCard productName={product.name} />
        </Link>
      ))}
    </div>
  );
};

export default ProductCatalog;