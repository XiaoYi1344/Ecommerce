'use client';

import * as React from 'react';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PartnerSection as PartnerData } from '@/components/data/About';

export function PartnerSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 5, mx: 'auto' }}>
      {PartnerData.map((p, idx) => (
        <Grid
          key={idx}
          container
          spacing={6}
          alignItems="center"
          sx={{ mb: 12 }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 320, md: 420 },
                overflow: 'hidden', // <-- thêm dòng này
                borderRadius: 2, // hoặc borderRadius 16 nếu muốn bo tròn
              }}
            >
              <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
                <Image
                  src={p.images[0]}
                  alt={`partner-${idx}-1`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                sx={{ fontSize: 22, color: '#B6B6B6', fontStyle: 'bold' }}
              >
                {p.eyebrow}
              </Typography>

              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: '#253D4E', fontSize: 46 }}
              >
                {p.title}
              </Typography>

              {p.paragraphs.map((pr, i) => (
                <Typography key={i} sx={{ color: '#7E7E7E', fontSize: 13 }}>
                  {pr}
                </Typography>
              ))}

              {/* <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button variant="contained" color="success">
                  Get started
                </Button>
                <Button variant="outlined" color="success">
                  Learn more
                </Button>
              </Stack> */}
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
