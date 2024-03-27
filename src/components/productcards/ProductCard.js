'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ productName }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {productName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;