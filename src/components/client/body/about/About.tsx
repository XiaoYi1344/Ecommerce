import { Container } from '@mui/material';
import React from 'react';
import TopSection from './section/TopSection';
import { WhatWeProvide } from './section/WhatWeProvide';
import { PartnerSection } from './section/PartnerSection';
import { InfoColumns } from './section/InfoColumns';
import StatisticalBanner from './section/StatisticalBanner';
import OurTeam from './section/ExpertSection';

const About = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1340px' }}>
      <TopSection />
      <WhatWeProvide />
      <PartnerSection />
      <InfoColumns />
      <StatisticalBanner />
      <OurTeam />
    </Container>
  );
};

export default About;
