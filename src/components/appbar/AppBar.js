'use client'

import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import NavLink from './navLink/navLink';
import styles from './appbar.module.css';
import { useCart } from '../../context/CartContext';
import TreeViewDropdown from './components/TreeViewDropdown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { itemCount } = useCart();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [isTreeViewOpen, setIsTreeViewOpen] = useState(false);

  const handleMenuIconOnClick = () => {
    setIsTreeViewOpen(!isTreeViewOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink item={{ title: 'Catalog', path: '/catalog' }} >
        <MenuItem>
          <IconButton size="large" color="inherit">
              <p>Catalog</p>
          </IconButton>
        </MenuItem>
      </NavLink>
      <NavLink item={{ title: 'Contact', path: '/contact' }} >
        <MenuItem>
          <IconButton size="large" color="inherit">
              <ContactPageIcon  />
          </IconButton>
          <p>Contact Us</p>
        </MenuItem>
      </NavLink>
      <NavLink item={{ title: 'Shopping Cart', path: '/cart' }} >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 5 new notifications"
          color="inherit"
        >
          <Badge badgeContent={itemCount} color="error">  {/* will need to update this to reflect the number of items in the cart */}
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart Items</p>
      </MenuItem>
      </NavLink>
      <NavLink item={{ title: 'Home', path: '/' }} >
      <MenuItem>
        <IconButton size="large" color="inherit">
            <HomeIcon  />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      </NavLink>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenuIconOnClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Browse
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink item={{ title: 'Catalog', path: '/catalog' }} >
            <IconButton size="large" color="inherit" className={styles.iconButtonColor} >
                <p>Catalog</p>
            </IconButton>
            </NavLink>
            <NavLink item={{ title: 'Home', path: '/' }} >
            <IconButton size="large" aria-label="home" color="inherit" className={styles.iconButtonColor} >
                <HomeIcon  />
            </IconButton>
            </NavLink>
            <NavLink item={{ title: 'Contact', path: '/contact' }} >
            <IconButton size="large" aria-label="contact us" color="inherit" className={styles.iconButtonColor} >
                <ContactPageIcon  />
            </IconButton>
            </NavLink>
            <NavLink item={{ title: 'Shopping Cart', path: '/cart' }} >
            <IconButton
              size="large"
              aria-label="show 5 new notifications"
              color="inherit"
              className={styles.iconButtonColor}
            >
              <Badge badgeContent={itemCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isTreeViewOpen && (
        <TreeViewDropdown onClose={() => setIsTreeViewOpen(false)} />
      )}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}



