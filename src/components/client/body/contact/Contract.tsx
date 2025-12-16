import { Box, Container } from '@mui/material';
import React from 'react';
import InfoSection from './section/InfoSection';
import { ViewSection } from './section/ViewSection';
import { Contact_Form } from './section/Contact_Form';
import HeroCarousel from '../home/banner/banner';
import { slides } from '@/components/data/Slides';

const Contract = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1340px' }}>
      <InfoSection />
      <ViewSection />
      <Contact_Form />
      <Box
        sx={{
          borderRadius: 3, // 24px
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
        }}
      >
        <HeroCarousel single initialIndex={slides.length - 1} />
      </Box>
    </Container>
  );
};

export default Contract;
