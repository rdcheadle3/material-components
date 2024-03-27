'use client';

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);

    const addToCart = () => {
        setItemCount(itemCount + 1);
    };

    return (
        <CartContext.Provider value={{ itemCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};