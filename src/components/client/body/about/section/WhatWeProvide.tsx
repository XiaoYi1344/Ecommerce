'use client';

import * as React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServiceSection } from '@/components/data/About';


export function WhatWeProvide() {
  const fadeInUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 12, mx: 'auto' }}>
      {ServiceSection.map((services, idx) => (
        <motion.div key={idx} {...fadeInUp} transition={{ duration: 0.6 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              fontSize: { xs: 24, md: 28 },
              fontWeight: 600,
              color: '#1F2937',
              mb: 3,
            }}
          >
            {services.title}
          </Typography>

          <Box sx={{ width: 144, height: 20, mx: 'auto', mb: 6 }}>
            <svg
              viewBox="0 0 144 20"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%' }}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#bce3c9" />
                  <stop offset="100%" stopColor="#bce3c9" />
                </linearGradient>
              </defs>
              <path
                d="
        M0 9
        C0 0, 8 15, 24 10
        C42 0, 40 15, 54 10
        C70 0, 70 15, 84 10
        C98 0, 96 17, 115 6
        
      "
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="4"
              />
            </svg>
          </Box>

          <Grid container spacing={4}>
            {services.items.map((it) => (
              <Grid key={it.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 1,
                    transition: '0.3s',
                    '&:hover': { boxShadow: 6 },
                    textAlign: 'center',
                    width: 380,
                    height: 380,
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: '100%',
                          height: 'auto',
                          bgcolor: 'white',
                          // borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          // boxShadow: 1,
                        }}
                      >
                        <Image
                          src={it.icon}
                          alt={it.title}
                          width={100}
                          height={100}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: '#253D4E', fontSize: 23 }}
                      >
                        {it.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: '#7E7E7E', fontSize: 15 }}
                      >
                        {it.body}
                      </Typography>

                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          mt: 1,
                          border: 'none',
                          color: '#3BB77E',
                          fontSize: 14,
                          textTransform: 'capitalize',
                        }}
                      >
                        Read more
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ))}
    </Box>
  );
}
