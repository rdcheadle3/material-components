'use client'
import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext'; // Adjust the path as needed
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box component for spacing

export default function ShoppingCartPage() {
    const { itemCount, addToCart } = useCart();

    return (
        <Container>
            <h1>Shopping Cart</h1>
            <p>Items in cart: {itemCount}</p>
            <Box display="flex" flexDirection="column" gap={2}> {/* Flex container with gap */}
                <Button variant="contained" color="primary" onClick={addToCart} sx={{ maxWidth: '200px', width: '100%' }} >
                    Add to Cart
                </Button>
                <Link href="/checkout" passHref>
                    <Button variant="contained" color="primary">Go to Checkout</Button>
                </Link>
            </Box>
        </Container>
    );
}