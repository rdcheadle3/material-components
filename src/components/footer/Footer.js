'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
        component="footer"
        sx={{
        paddingBottom: '30px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '10%', // Adjust the height as needed
    }}
    >
        <footer style={{ backgroundColor: '#f0f0f0', padding: '16px' }}>
        <Container maxWidth="xl">
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            Allstate Gasket, Inc.
            31 Prospect Place
            Deer Park, NY 11729 USA
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            Email: info@allstategasket.com
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            Product Specials: Food Grade / FDA Material, EPDM, Neoprene, BUNA, Natural Gum
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            NSR / NSFF Flange Gaskets: Pre-Cut, Ready-to-Ship, NSF 61 EPDM for drinking water use
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            Contact us with any questions. Our experienced sales staff will be happy to help.
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            Content Copyright© 1999 - 2024 by Allstate Gasket, Inc
            </Typography>
            <Typography variant="body1" align={isMobile ? 'center' : 'left'}>
            <a href="/sitemap">Site Map</a> • <a href="/terms-of-sale">Terms of Sale</a>
            </Typography>
        </Container>
        </footer>
    </Box>
  );
}
