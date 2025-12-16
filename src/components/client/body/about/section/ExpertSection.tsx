'use client';

import Image from 'next/image';
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { teamIntro, teamMembers } from '@/components/data/About';


export default function OurTeam() {
  return (
    <Box component="section" sx={{ py: 10 }}>

      {/* TITLE + WAVE */}
      <Box textAlign="center" mb={8}>
        <Typography sx={{ color: '#253D4E', fontWeight: 700, fontSize: 40 }}>
          {teamIntro.sectionTitle}
        </Typography>

        {/* <Typography
          sx={{
            fontSize: 32,
            fontWeight: 800,
            mt: 1,
            mb: 2,
            color: '#253D4E',
          }}
        >
          Our Team
        </Typography> */}

        {/* Wave SVG */}
        <Box sx={{ mx: 'auto', width: 140 }}>
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
      </Box>

      {/* CONTENT AREA */}
      <Grid
        container
        spacing={6}

        sx={{ margin: '0 auto', px: 2 }}
      >
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography sx={{ color: '#3BB77E', fontWeight: 600, mb: 1 }}>
            {teamIntro.sectionTitle}
          </Typography>

          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 700,
              color: '#253D4E',
              lineHeight: '44px',
              mb: 3,
            }}
          >
            {teamIntro.heading}
          </Typography>

          {teamIntro.paragraphs.map((p, i) => (
            <Typography
              key={i}
              sx={{
                color: '#7E7E7E',
                lineHeight: '26px',
                mb: 3,
                fontSize: 15,
              }}
            >
              {p}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#3BB77E',
              px: 3,
              py: 1,
              borderRadius: '6px',
              '&:hover': { backgroundColor: '#2ea56c' },
            }}
          >
            {teamIntro.buttonText}
          </Button>
        </Grid>

        {/* RIGHT CARDS */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ width: '100%' }}>
            {/* GRID LIST */}
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                  // md: 'repeat(3, 1fr)',
                },
              }}
            >
              {teamMembers.map((m, idx) => (
                <Stack key={idx} spacing={2} position="relative">
                  {/* IMAGE WRAPPER */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      position: 'relative',
                      borderRadius: '14px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={453}
                      height={483}
                      style={{
                        width: '100%',
                        height: 310,
                        objectFit: 'cover',
                      }}
                    />
                  </Box>

                  {/* FLOAT CARD */}
                  <Card
                    sx={{
                      width: 230,
                      position: 'absolute',
                      top: 180,
                      left: 19,
                      borderRadius: 3,
                      border: '1px solid #FFF',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      {/* NAME */}
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        fontSize={18}
                        sx={{ color: '#253D4E' }}
                      >
                        {m.name}
                      </Typography>

                      {/* ROLE */}
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: '#7E7E7E',
                          mt: 0.5,
                          mb: 1.5,
                        }}
                      >
                        {m.role}
                      </Typography>

                      {/* SOCIAL ICONS */}
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        mt={1}
                      >
                        {[Facebook, Twitter, Instagram, Youtube].map(
                          (Icon, i) => (
                            <Icon
                              key={i}
                              size={17}
                              style={{
                                cursor: 'pointer',
                                color: '#3BB77E',
                                transition: '0.25s',
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = '#2e9e67')
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = '#3BB77E')
                              }
                            />
                          ),
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
