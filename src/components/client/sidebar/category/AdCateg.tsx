'use client';

import Image from 'next/image';
import { useTranslate } from '@/hooks/useTranslate';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Ads } from '@/components/data/Ad';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function AdCateg() {
  const { t } = useTranslate();

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid container spacing={2} justifyContent="center">
        {Ads.map((item) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 517, // ✨ để item không quá rộng
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src={item.banner}
                alt={item.title}
                width={517}
                height={303}
                style={{ objectFit: 'cover' }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '70%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  p: 3,
                  color: '#253D4E',
                }}
              >
                <Typography fontSize={{ xs: 16, md: 23 }} fontWeight={600}>
                  {item.title}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: '#3bb77e',
                    borderRadius: '30px',
                    textTransform: 'none',
                    '&:hover': { background: '#2e9c68' },
                    height: 36,
                    width: 120,
                    fontSize: 12,
                  }}
                >
                  Shop Now <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
