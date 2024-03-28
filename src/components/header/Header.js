'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return null;
  }

  const logoPath = '/AG-Logo.png';

  return (
    <Container maxWidth="xl" sx={{ 
      padding: '16px 0', 
      backgroundColor: '#fff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }}>
      <img src={logoPath} alt="Company Logo" style={{ maxHeight: '60px', width: 'auto' }} />
      <Typography variant="body1" noWrap component="div">
        123-456-7890 | email@example.com
      </Typography>
    </Container>
  );
}
