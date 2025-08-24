import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CompareArrows,
  Speed,
  Security,
  Support,
  TrendingUp,
  VerifiedUser,
  Shield,
  Psychology,
  Lock,
  Rocket,
  Star,
} from '@mui/icons-material';

const FeaturesSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [500, 1000], [0, 1]);

  const features = [
    {
      icon: <CompareArrows sx={{ fontSize: 40 }} />,
      title: 'AI-Powered Comparison',
      description: 'Advanced algorithms compare thousands of policies instantly to find your perfect match.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      color: '#AC7DFF',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast Quotes',
      description: 'Get comprehensive insurance quotes in under 30 seconds with our cutting-edge technology.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      color: '#AC7DFF',
    },
    {
      icon: <Shield sx={{ fontSize: 40 }} />,
      title: 'Blockchain Security',
      description: 'Your data is protected by enterprise-grade blockchain technology and military-level encryption.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      color: '#AC7DFF',
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'Smart Risk Assessment',
      description: 'AI-driven risk analysis provides personalized coverage recommendations based on your profile.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      color: '#AC7DFF',
    },
    {
      icon: <Rocket sx={{ fontSize: 40 }} />,
      title: 'Instant Claims Processing',
      description: 'File and process claims instantly with our automated system and real-time tracking.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
      color: '#AC7DFF',
    },
    {
      icon: <Star sx={{ fontSize: 40 }} />,
      title: 'Premium Experience',
      description: 'Enjoy a seamless, premium experience with 24/7 support and personalized service.',
      gradient: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
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

      <Box sx={{ py: 12, position: 'relative', zIndex: 2, width: '100%' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y, opacity }}
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
                  Revolutionary Features
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
                  Experience the future of insurance with cutting-edge technology that puts you first
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={5} sx={{display:"flex",justifyContent:"center",alignItems:"center" }} >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div variants={cardVariants}>
                    <motion.div
                      whileHover={{ 
                        y: -10,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        sx={{
                          width: '500px',
                          height: '100%',
                          background: 'rgba(39, 27, 69, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(172, 125, 255, 0.1)',
                          borderRadius: 4,
                          overflow: 'hidden',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: feature.gradient,
                          },
                          '&:hover': {
                            border: '1px solid rgba(172, 125, 255, 0.2)',
                            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${feature.color}20`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
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
                                }}
                              >
                                {feature.icon}
                              </Box>
                          </motion.div>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 2,
                              fontWeight: 700,
                              color: '#FFFFFF',
                              fontSize: '1.5rem',
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#B0B0C7',
                              lineHeight: 1.6,
                              fontSize: '1rem',
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Stats Section with 3D effects */}
            <motion.div variants={cardVariants}>
              <Box
                sx={{
                  mt: 10,
                  p: 6,
                  background: 'rgba(39, 27, 69, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(172, 125, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(172, 125, 255, 0.1), transparent)',
                    animation: 'shimmer 3s infinite',
                  },
                }}
              >
                <Grid container spacing={4} justifyContent="center">
                  <Grid item xs={6} sm={3}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', md: '3rem' },
                          }}
                        >
                          10M+
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B0B0C7', fontSize: '1rem' }}>
                          Happy Customers
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', md: '3rem' },
                          }}
                        >
                          50+
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B0B0C7', fontSize: '1rem' }}>
                          Insurance Partners
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', md: '3rem' },
                          }}
                        >
                          99.9%
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B0B0C7', fontSize: '1rem' }}>
                          Uptime
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #AC7DFF 0%, #7C4DFF 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', md: '3rem' },
                          }}
                        >
                          24/7
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#B0B0C7', fontSize: '1rem' }}>
                          Support
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
