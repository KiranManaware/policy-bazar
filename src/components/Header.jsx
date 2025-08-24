import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Security,
} from '@mui/icons-material';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(29, 29, 41, 0.9)', 'rgba(255, 255, 255, 0.98)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(10px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#7C4DFF' }}>
          Smart Insurance
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  color: '#1E293B',
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(90deg, #B794FF 0%, #9B6CFF 100%)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get Quote
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        style={{
          backgroundColor,
          backdropFilter,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: scrolled ? '1px solid rgba(172, 125, 255, 0.1)' : 'none',
        }}
      >
        <AppBar 
          position="static" 
          elevation={0}
          sx={{
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(172, 125, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(172, 125, 255, 0.7)',
                      boxShadow: '0 2px 8px rgba(172, 125, 255, 0.2)',
                      border: '1px solid rgba(172, 125, 255, 0.2)',
                    }}
                  >
                    <Security sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: scrolled ? '#1E293B' : '#FFFFFF',
                      fontSize: '1.5rem',
                      letterSpacing: '-0.01em',
                      textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Smart Insurance
                  </Typography>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <Button
                          href={item.href}
                          sx={{
                            color: scrolled ? '#1E293B' : '#D3D3E2',
                            fontWeight: 500,
                            fontSize: '1rem',
                            textTransform: 'none',
                            position: 'relative',
                            textShadow: scrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: 0,
                              left: '50%',
                              width: 0,
                              height: 2,
                              background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                              transition: 'all 0.3s ease',
                              transform: 'translateX(-50%)',
                            },
                            '&:hover::after': {
                              width: '100%',
                            },
                            '&:hover': {
                              background: 'transparent',
                              color: scrolled ? '#7C4DFF' : '#FFFFFF',
                            },
                          }}
                        >
                          {item.name}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              )}

              {/* CTA Button */}
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      fontSize: '1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(172, 125, 255, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #B794FF 0%, #9B6CFF 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(172, 125, 255, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Quote
                  </Button>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: scrolled ? '#1E293B' : '#FFFFFF',
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(172, 125, 255, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <Box sx={{ height: 80 }} />
    </>
  );
};

export default Header;
