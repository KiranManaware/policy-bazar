import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Security,
  TrendingUp,
  Support,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import ThreeDScene from './ThreeDScene';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingBlock: '120px 80px',
      }}
    >
      {/* Advanced 3D Background Scene */}
      <ThreeDScene />

      {/* Cinematic lighting effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0%',
          right: '0%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
          zIndex: 2,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 100,
          height: 100,
          background: 'linear-gradient(45deg, #7C3AED, #A78BFA)',
          borderRadius: '20px',
          opacity: 0.3,
          zIndex: 2,
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: 80,
          height: 80,
          background: 'linear-gradient(45deg, #F59E0B, #FCD34D)',
          borderRadius: '50%',
          opacity: 0.2,
          zIndex: 2,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y, opacity }}
        >
          <Grid container spacing={12} alignItems="center" gap={30}>
            <Grid item xs={12} lg={6}>
              <motion.div variants={textVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Future of
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #A78BFA, #FCD34D)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block',
                      textShadow: 'none',
                    }}
                  >
                    Insurance
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    maxWidth: 500,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Experience the next generation of insurance with AI-powered insights, 
                  instant quotes, and seamless digital protection. Secure your future with 
                  cutting-edge technology.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(45deg, #7C3AED, #A78BFA)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #6D28D9, #8B5CF6)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 35px rgba(124, 58, 237, 0.6)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                        borderWidth: 2,
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255, 255, 255, 0.1)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircle sx={{ color: 'rgba(172, 125, 255, 0.6)', fontSize: 24 }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}
                      >
                        AI-Powered
                      </Typography>
                    </Box>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircle sx={{ color: 'rgba(172, 125, 255, 0.6)', fontSize: 24 }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}
                      >
                        Instant Quotes
                      </Typography>
                    </Box>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircle sx={{ color: 'rgba(172, 125, 255, 0.6)', fontSize: 24 }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}
                      >
                        Blockchain Secure
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={6}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* Enhanced floating feature cards */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotateY: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: 'absolute',
                      top: '5%',
                      right: '15%',
                      zIndex: 4,
                    }}
                  >
                                          <Paper
                        sx={{
                          width: 160,
                          height: 100,
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Security sx={{ color: 'rgba(172, 125, 255, 0.6)', fontSize: 36 }} />
                      </Paper>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotateY: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '10%',
                      zIndex: 4,
                    }}
                  >
                                          <Paper
                        sx={{
                          width: 140,
                          height: 90,
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <TrendingUp sx={{ color: 'rgba(172, 125, 255, 0.6)', fontSize: 32 }} />
                      </Paper>
                  </motion.div>

                  {/* Enhanced Main hero card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper
                      sx={{
                        width: 380,
                        height: 480,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                        border:"1px solid red",
                        p: 4,
                      }}
                    >
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          background: 'rgba(172, 125, 255, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          boxShadow: '0 4px 16px rgba(172, 125, 255, 0.2)',
                          border: '1px solid rgba(172, 125, 255, 0.2)',
                        }}
                      >
                        <Support sx={{ color: 'rgba(172, 125, 255, 0.7)', fontSize: 56 }} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#1E293B',
                          textAlign: 'center',
                          mb: 2,
                          fontWeight: 700,
                        }}
                      >
                        Smart Protection
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748B',
                          textAlign: 'center',
                          px: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        Advanced AI-powered insurance recommendations with real-time risk assessment and instant policy customization
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
