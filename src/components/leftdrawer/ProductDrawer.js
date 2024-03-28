'use client'
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

const drawerWidth = 240;

export default function ProductDrawer({ drawerOpen, handleMenuIconOnClick }) {
  // Sample structure of categories and subcategories
  const categories = {
    'Gaskets': ['Pre-Cut Gaskets', 'Scanning, Measurement, and Reverse Engineering Services', 'Garlock BLUE_GARD 3000 Pipe', 'Flange Gaskets'],
    'Tools & Parts': ['Gasket Cutting Machines', 'Replacement Baldes', 'Parts'],
    // ... more categories
  };

  const handleTreeItemClick = (itemId) => {
    // Navigate to the category/subcategory page
    console.log("Navigating to: ", itemId);
    // Add your navigation logic here
  };

  return (
    <Drawer
      variant="permanent"
      open={drawerOpen}
      onClose={handleMenuIconOnClick}
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          height: '100%',
        },
      }}
    >
      {console.log('ProductDrawer rendered')}
      <SimpleTreeView>
        {Object.entries(categories).map(([category, subcategories]) => (
          <TreeItem key={category} itemId={category} label={category}>
            {subcategories.map(subcategory => (
              <TreeItem 
                key={subcategory} 
                itemId={subcategory} 
                label={subcategory}
                onClick={() => handleTreeItemClick(subcategory)}
              />
            ))}
          </TreeItem>
        ))}
      </SimpleTreeView>
    </Drawer>
  );
}
