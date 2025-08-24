import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  HealthAndSafety,
  Favorite,
  DirectionsCar,
  Home,
  Add,
  ArrowForward,
  Shield,
  LocalHospital,
  Security,
  House,
} from '@mui/icons-material';

const InsuranceCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  const insuranceCategories = [
    {
      id: 'health',
      title: 'Health Insurance',
      description: '100% bills covered',
      icon: <HealthAndSafety sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      glowColor: '#AC7DFF',
      cta: 'No room rent limit',
      features: ['Comprehensive Coverage', 'Cashless Treatment', 'Pre & Post Hospitalization'],
      color: '#AC7DFF',
    },
    {
      id: 'life',
      title: 'Life Insurance',
      description: 'Flexible coverage',
      icon: <Favorite sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      glowColor: '#AC7DFF',
      cta: 'Get Quote',
      features: ['Term Life', 'Whole Life', 'Critical Illness'],
      color: '#AC7DFF',
    },
    {
      id: 'vehicle',
      title: 'Vehicle Insurance',
      description: 'Buy or renew policy',
      icon: <DirectionsCar sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      glowColor: '#AC7DFF',
      cta: 'Up to ₹600 off',
      features: ['Comprehensive', 'Third Party', 'Zero Depreciation'],
      color: '#AC7DFF',
    },
    {
      id: 'home',
      title: 'Home Insurance',
      description: 'Protect your haven',
      icon: <Home sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      glowColor: '#AC7DFF',
      cta: 'Secure Now',
      features: ['Building Coverage', 'Contents Protection', 'Natural Disasters'],
      color: '#AC7DFF',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1A1B23 0%, #262049 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* 3D Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(172, 125, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, rgba(124, 77, 255, 0.05) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ y }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={cardVariants}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Premium Insurance
              </Typography>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.25rem',
                  color: '#B0B0C7',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Protect what matters most with our comprehensive insurance solutions
              </Typography>
            </motion.div>
          </Box>

          <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }} >
            {insuranceCategories.map((category, index) => (
              <Grid size={4} item key={category.id}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    y: -20,
                    scale: 1.05,
                  }}
                  onHoverStart={() => setHoveredCard(category.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(39, 27, 69, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${hoveredCard === category.id ? category.glowColor + '40' : 'rgba(172, 125, 255, 0.1)'}`,
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: category.gradient,
                        opacity: hoveredCard === category.id ? 0.1 : 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        background: category.gradient,
                        borderRadius: 6,
                        opacity: hoveredCard === category.id ? 0.3 : 0,
                        filter: 'blur(10px)',
                        transition: 'opacity 0.3s ease',
                        zIndex: -2,
                      },
                      '&:hover': {
                        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${category.glowColor}40`,
                        transform: 'translateY(-10px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative'}}>
                      {/* Icon with gradient background */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: 'rgba(172, 125, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            color: 'rgba(172, 125, 255, 0.7)',
                            boxShadow: '0 4px 16px rgba(172, 125, 255, 0.2)',
                            border: '1px solid rgba(172, 125, 255, 0.2)',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: -2,
                              left: -2,
                              right: -2,
                              bottom: -2,
                              background: 'rgba(172, 125, 255, 0.3)',
                              borderRadius: '50%',
                              opacity: hoveredCard === category.id ? 0.3 : 0,
                              filter: 'blur(8px)',
                              transition: 'opacity 0.3s ease',
                              zIndex: -1,
                            },
                          }}
                        >
                          {category.icon}
                        </Box>
                      </motion.div>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1,
                          fontWeight: 700,
                          color: '#FFFFFF',
                          fontSize: '1.5rem',
                        }}
                      >
                        {category.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#B0B0C7',
                          mb: 3,
                          fontSize: '1rem',
                        }}
                      >
                        {category.description}
                      </Typography>

                      {/* Features */}
                      <Box sx={{ mb: 3 }}>
                        {category.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: '#B0B0C7',
                              fontSize: '0.875rem',
                              mb: 0.5,
                            }}
                          >
                            • {feature}
                          </Typography>
                        ))}
                      </Box>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                          sx={{
                            background: category.gradient,
                            color: 'white',
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            boxShadow: `0 4px 15px ${category.color}40`,
                            '&:hover': {
                              background: 'linear-gradient(90deg, #B794FF 0%, #9B6CFF 100%)',
                              transform: 'translateY(-2px)',
                              boxShadow: `0 8px 25px ${category.color}60`,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {category.cta}
                        </Button>
                      </motion.div>

                      {/* Add button overlay */}
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          background: 'rgba(172, 125, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(172, 125, 255, 0.2)',
                          color: '#FFFFFF',
                          width: 32,
                          height: 32,
                          '&:hover': {
                            background: 'rgba(172, 125, 255, 0.2)',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Add sx={{ fontSize: 20 }} />
                      </IconButton>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div variants={cardVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                    color: 'white',
                    px: 6,
                    py: 2,
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    textTransform: 'none',
                    boxShadow: '0 8px 25px rgba(172, 125, 255, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #B794FF 0%, #9B6CFF 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(172, 125, 255, 0.6)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default InsuranceCards;
