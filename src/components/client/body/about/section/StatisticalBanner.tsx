// components/StatisticalBanner.tsx
'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { statsData } from '@/components/data/About';
import { Grid } from '@mui/material';

export default function StatisticalBanner() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 180, sm: 220, md: 260 },
        }}
      >
        <Image
          src="/about/statistical.png"
          alt="statistical background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* Dark overlay - brightness 40% */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(59,160,126,0.6)',
          }}
        />

        {/* Grid content on top */}
        <Grid
          container
          sx={{
            position: 'absolute',
            inset: 0,
            px: { xs: 2, sm: 4 },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(5, 1fr)',
            },
            alignItems: 'center',
          }}
        >
          {statsData.map((s) => (
            <Box
              key={s.id}
              sx={{
                textAlign: 'center',
                color: '#fff',
                p: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 26, sm: 32, md: 40 },
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: { xs: 11, sm: 12, md: 14 },
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
