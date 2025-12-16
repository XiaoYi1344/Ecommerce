'use client';

import * as React from 'react';
import { Box, Grid, CardContent, Typography } from '@mui/material';
import { CateInfoSection } from '@/components/data/About';

export function InfoColumns() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 1, mx: 'auto' }}>
      {CateInfoSection.map((section, sIdx) => (
        <Grid key={sIdx} container spacing={6} sx={{ mb: 12 }}>
          {section.cols.map((c, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: '#253D4E',
                      fontSize: 34,
                    }}
                  >
                    {c.title}
                  </Typography>
                  <Typography sx={{ color: '#7E7E7E', fontSize: 17 }}>
                    {c.text}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
