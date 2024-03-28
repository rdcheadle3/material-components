'use client'

import React from 'react';
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../components/actioncards/ActionAreaCard';

const cardData = [
  {
    image: '/Gasket-Cutter-M3-01.jpg',
    title: 'M3 Gasket Cutter',
    description: 'This little workhorse produces! The M3 Gasket Cutter easily adjusts to any size variation - lock it in and crank \'em out. See our video to see the M3 in action.',
  },
  {
    image: '/Gasket-Material-Red-Rubber-01.jpg',
    title: 'Gasket Materials',
    description: 'Allstate Gasket supplies a wide range of sheet materials including Food Grade Rubbers, Fiber, Compressed, EPDM, and much more ready to buy online.',
  },
  {
    image: '/Packing-Tools-Gen-01.jpg',
    title: 'Packing Tools',
    description: 'Specialized, hard-to-find tools for packing maintenance - and packing, too. Popular is the all-inclusive 30-Pc Packing Mechanics Kit - everything but the pump.',
  },
];

export default function Home() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

