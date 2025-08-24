import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Star,
  Verified,
  ThumbUp,
  Security,
} from '@mui/icons-material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      avatar: 'SJ',
      rating: 5,
      review: 'The platform made finding the right insurance so much easier. The comparison feature saved me hours of research and helped me get better coverage at a lower price.',
      verified: true,
      category: 'Health Insurance',
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      avatar: 'MC',
      rating: 5,
      review: 'Excellent customer service and a seamless experience. The instant quotes feature is incredibly fast and accurate. Highly recommended!',
      verified: true,
      category: 'Life Insurance',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      avatar: 'ER',
      rating: 5,
      review: 'I was skeptical about online insurance, but this platform exceeded my expectations. The process was transparent and the support team was very helpful.',
      verified: true,
      category: 'Auto Insurance',
    },
    {
      name: 'David Thompson',
      role: 'Financial Advisor',
      avatar: 'DT',
      rating: 5,
      review: 'As a financial advisor, I appreciate the detailed policy comparisons and the educational content. This platform truly puts customers first.',
      verified: true,
      category: 'Property Insurance',
    },
  ];

  const trustIndicators = [
    {
      icon: <Verified sx={{ fontSize: 40 }} />,
      title: 'Verified Reviews',
      description: 'All reviews are verified from real customers',
      count: '50,000+',
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Secure Platform',
      description: 'Bank-level security for your data',
      count: '99.9%',
    },
    {
      icon: <ThumbUp sx={{ fontSize: 40 }} />,
      title: 'Customer Satisfaction',
      description: 'Rated excellent by our users',
      count: '4.9/5',
    },
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

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  mb: 2,
                  fontWeight: 700,
                }}
              >
                What Our Customers Say
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.25rem',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Join thousands of satisfied customers who trust us with their insurance needs
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={motion.div}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mr: 2,
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                        {testimonial.verified && (
                          <Verified sx={{ color: '#10b981', fontSize: 24 }} />
                        )}
                      </Box>

                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{ mb: 2 }}
                        icon={<Star sx={{ color: '#fbbf24' }} />}
                      />

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          color: 'text.primary',
                        }}
                      >
                        "{testimonial.review}"
                      </Typography>

                      <Chip
                        label={testimonial.category}
                        size="small"
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  mb: 4,
                  fontWeight: 600,
                }}
              >
                Trust & Reliability
              </Typography>
              <Grid container spacing={4}>
                {trustIndicators.map((indicator, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          color: 'white',
                        }}
                      >
                        {indicator.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'white',
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        {indicator.count}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          mb: 1,
                          fontWeight: 500,
                        }}
                      >
                        {indicator.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {indicator.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
