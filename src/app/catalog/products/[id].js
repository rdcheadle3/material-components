'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false); // Define loading state

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady && id) {
        const productId = parseInt(id, 10); // Parse id to integer
        const fetchUrl = `http://localhost:3001/api/products/${productId}`;
        console.log('Fetching from URL:', fetchUrl);
        setLoading(true);

        try {
          const response = await fetch(fetchUrl);
          if (!response.ok) {
            throw new Error('Product not found');
          }
          const data = await response.json();
          console.log('Product data:', data);
          // Handle product data
        } catch (error) {
          console.error('Error fetching product:', error);
          // Handle error
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [router.isReady, id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <h1>Product ID: {id}</h1>
      )}
    </div>
  );
};

export default ProductPage;
