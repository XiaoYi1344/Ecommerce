
'use client';

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { ChevronLeft, ChevronRight, House } from 'lucide-react';
import { HeroSection } from '@/components/data/About';
import Image from 'next/image';
import { motion } from 'framer-motion';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export default function TopSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <React.Fragment>
      {/* Breadcrumbs */}
      <Stack
        spacing={2}
        sx={{
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff',
          width: '100%',
          py: 2,
          px: { xs: 2, md: 4 },
        }}
      >
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link
            underline="hover"
            color="#3BB77E"
            href="/"
            onClick={handleClick}
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: 14 }}
          >
            <House size={16} />
            Home
          </Link>
          <Link
            underline="hover"
            color="#7E7E7E"
            fontSize={14}
            href="#"
            onClick={handleClick}
          >
            Pages
          </Link>
          <Typography sx={{ color: '#7E7E7E', fontSize: 14 }}>About Us</Typography>
        </Breadcrumbs>
      </Stack>

      {/* Content */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 2 },
        }}
      >
        {HeroSection.map((h, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            key={index}
            sx={{ mb: index !== HeroSection.length - 1 ? 8 : 0 }}
          >
            {/* Left image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={h.bigImage}
                    alt={`hero-${index}`}
                    width={647}
                    height={737}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Paper>
              </motion.div>
            </Grid>

            {/* Right content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <motion.div
                  {...fadeInUp}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: 40,
                      fontWeight: 600,
                      color: '#253D4E',
                    }}
                  >
                    {h.title}
                  </Typography>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {h.paragraphs.map((p, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: 16,
                        color: '#7E7E7E',
                        fontFamily: 'Lato',
                        lineHeight: '24px',
                        mb: i !== h.paragraphs.length - 1 ? '40px' : 0,
                      }}
                    >
                      {p}
                    </Typography>
                  ))}
                </motion.div>

                {/* Thumbnails slider */}
                <motion.div
                  {...fadeInUp}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Box sx={{ position: 'relative', mt: 2 }}>
                    <Box
                      ref={scrollRef}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                      }}
                    >
                      {h.thumbs.map((t, idx) => (
                        <Paper
                          key={idx}
                          elevation={1}
                          sx={{
                            minWidth: 'calc(33.333% - 11px)',
                            height: 236,
                            borderRadius: 2,
                            overflow: 'hidden',
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={t}
                            alt={`thumb-${idx}`}
                            width={300}
                            height={400}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Paper>
                      ))}
                    </Box>

                    <IconButton
                      onClick={() =>
                        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
                      }
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: '#fff',
                        boxShadow: 2,
                        '&:hover': { bgcolor: '#f5f5f5' },
                      }}
                    >
                      <ChevronLeft size={20} />
                    </IconButton>

                    <IconButton
                      onClick={() =>
                        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
                      }
                      sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: '#fff',
                        boxShadow: 2,
                        '&:hover': { bgcolor: '#f5f5f5' },
                      }}
                    >
                      <ChevronRight size={20} />
                    </IconButton>
                  </Box>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Box>
    </React.Fragment>
  );
}
