import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  CheckCircle,
  Star,
  TrendingUp,
} from '@mui/icons-material';

const CTASection = () => {
  const benefits = [
    'Instant quotes in under 2 minutes',
    'Compare 50+ insurance providers',
    'Save up to 40% on premiums',
    '24/7 expert support',
    '100% secure & confidential',
    'No hidden fees or charges',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: 100,
          height: 100,
          background: 'rgba(251, 191, 36, 0.1)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />
      <Box
        component={motion.div}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: 150,
          height: 150,
          background: 'rgba(99, 102, 241, 0.1)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Ready to Get
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block',
                    }}
                  >
                    Started?
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    fontSize: '1.25rem',
                    lineHeight: 1.6,
                  }}
                >
                  Join millions of customers who have already found their perfect
                  insurance coverage. Start your journey today and experience the
                  difference of smart insurance solutions.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} sx={{ color: '#fbbf24', fontSize: 20 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    4.9/5 rating from 50,000+ customers
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 4,
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: 'text.primary',
                      textAlign: 'center',
                    }}
                  >
                    Why Choose Us?
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    {benefits.map((benefit, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: '#10b981',
                            fontSize: 24,
                            mr: 2,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 500,
                          }}
                        >
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: 3,
                      p: 3,
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    <TrendingUp sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      Save Up to 40%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      On your insurance premiums with our smart comparison tool
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: 6,
                p: 4,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Don't Wait - Secure Your Future Today!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 3,
                  fontSize: '1.125rem',
                }}
              >
                Get instant quotes and start saving on your insurance coverage
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 30px rgba(251, 191, 36, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Start Your Quote Now
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
