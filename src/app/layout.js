
import React from 'react';
import { Grid } from '@mui/material';
import Header from '../components/header/Header';
import AppBar from '../components/appbar/AppBar';
//import ProductDrawer from '../components/leftdrawer/ProductDrawer';
import Footer from '../components/footer/Footer';
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Grid container direction="column" style={{ minHeight: '100vh' }}>
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <AppBar />
            </Grid>
            <Grid item container style={{ flexGrow: 1 }}>
              {/* <Grid item xs={3}>
                <ProductDrawer />
              </Grid> */}
              <Grid item xs={9}>
                {children}
              </Grid>
            </Grid>
            <Grid item row={2}>
              <Footer />
            </Grid>
          </Grid>
        </body>
      </html>
    </CartProvider>
  );
}