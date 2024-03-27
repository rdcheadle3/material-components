'use client'
import React from 'react';
import { useCart } from '../../context/CartContext'; // Adjust the path as needed
import Container from '@mui/material/Container';

export default function ShoppingCartPage() {
    const { itemCount, addToCart } = useCart();

    return (
        <Container>
            <h1>Shopping Cart</h1>
            <p>Items in cart: {itemCount}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </Container>
    );
}