'use client'

import React from 'react';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import styles from '../appbar.module.css';

export default function TreeViewDropdown({ onClose }) {

    const categories = {
      'Gaskets': ['Pre-Cut Gaskets', 'Scanning, Measurement, and Reverse Engineering Services', 'Garlock BLUE_GARD 3000 Pipe', 'Flange Gaskets'],
      'Tools & Parts': ['Gasket Cutting Machines', 'Replacement Baldes', 'Parts'],
      // ... more categories
    };
    const handleTreeItemClick = (itemId) => {
  }
  
    return (
      <SimpleTreeView className={styles.treeViewDropdown}>
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
    );
  }