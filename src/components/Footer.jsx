import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'Health Insurance', href: '#' },
      { name: 'Life Insurance', href: '#' },
      { name: 'Auto Insurance', href: '#' },
      { name: 'Home Insurance', href: '#' },
      { name: 'Business Insurance', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Claims Support', href: '#' },
      { name: 'Policy Documents', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Live Chat', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, href: '#', color: '#AC7DFF' },
    { icon: <Twitter />, href: '#', color: '#AC7DFF' },
    { icon: <Instagram />, href: '#', color: '#AC7DFF' },
    { icon: <LinkedIn />, href: '#', color: '#AC7DFF' },
    { icon: <YouTube />, href: '#', color: '#AC7DFF' },
  ];

  const contactInfo = [
    { icon: <Email />, text: 'support@smartinsurance.com', href: 'mailto:support@smartinsurance.com' },
    { icon: <Phone />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <LocationOn />, text: '123 Insurance Ave, Suite 100, New York, NY 10001', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1A1B23 0%, #262049 100%)',
        color: '#FFFFFF',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Smart Insurance
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#B0B0C7',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    Experience the future of insurance with AI-powered insights, 
                    instant quotes, and seamless digital protection.
                  </Typography>
                  
                  {/* Social Links */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.href}
                          sx={{
                            background: 'rgba(172, 125, 255, 0.1)',
                            border: '1px solid rgba(172, 125, 255, 0.2)',
                            color: '#AC7DFF',
                            '&:hover': {
                              background: 'rgba(172, 125, 255, 0.2)',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Footer Links */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={3}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: '#FFFFFF',
                      }}
                    >
                      Products
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {footerLinks.products.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          sx={{
                            color: '#B0B0C7',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            '&:hover': {
                              color: '#AC7DFF',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: '#FFFFFF',
                      }}
                    >
                      Company
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {footerLinks.company.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          sx={{
                            color: '#B0B0C7',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            '&:hover': {
                              color: '#AC7DFF',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: '#FFFFFF',
                      }}
                    >
                      Support
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {footerLinks.support.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          sx={{
                            color: '#B0B0C7',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            '&:hover': {
                              color: '#AC7DFF',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: '#FFFFFF',
                      }}
                    >
                      Legal
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {footerLinks.legal.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          sx={{
                            color: '#B0B0C7',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            '&:hover': {
                              color: '#AC7DFF',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#FFFFFF',
                }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={3}>
                {contactInfo.map((contact, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                             <Box
                         sx={{
                           width: 40,
                           height: 40,
                           borderRadius: '50%',
                           background: 'rgba(172, 125, 255, 0.1)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           color: 'rgba(172, 125, 255, 0.6)',
                         }}
                       >
                         {contact.icon}
                       </Box>
                      <Link
                        href={contact.href}
                        sx={{
                          color: '#B0B0C7',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          '&:hover': {
                            color: '#AC7DFF',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {contact.text}
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Divider */}
          <Divider sx={{ borderColor: 'rgba(172, 125, 255, 0.2)', my: 4 }} />

          {/* Copyright */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#B0B0C7',
                  fontSize: '0.875rem',
                }}
              >
                © 2024 Smart Insurance. All rights reserved. | 
                <Link
                  href="#"
                  sx={{
                    color: '#AC7DFF',
                    textDecoration: 'none',
                    ml: 1,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Privacy Policy
                </Link>
                {' | '}
                <Link
                  href="#"
                  sx={{
                    color: '#AC7DFF',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Terms of Service
                </Link>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
