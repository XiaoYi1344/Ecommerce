'use client';

import { Box, Container, Grid, Stack, Button } from '@mui/material';
import React, { useState } from 'react';

import HeroCarousel from '../home/banner/banner';
import ProductLayout from './section/ShopCateg';
import DealsSection from '../../product/Deals';
import { CategoryBox } from '../../sidebar/category/CategoryBox';
import { FilterBox } from '../../sidebar/FilterBox';
import { NewProductsBox } from '../../sidebar/NewProductsBox';

const Shop = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const MainContent = (
    <Grid size={{ xs: 12, sm: 7.5, md: 9.5 }}>
      <ProductLayout viewMode={viewMode} />
      <DealsSection />
    </Grid>
  );

  const Sidebar = (
    <Grid size={{ xs: 12, sm: 4.5, md: 2.5 }}>
      <CategoryBox />
      <FilterBox />
      <NewProductsBox title="New products" />
    </Grid>
  );

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1340px' }}>
      {/* CONTROL BUTTONS */}
      <Stack
        direction="row"
        spacing={1}
        mb={2}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {/* VIEW MODE */}
        <Stack direction="row" spacing={1}>
          <Button
            variant={viewMode === 'grid' ? 'contained' : 'outlined'}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === 'list' ? 'contained' : 'outlined'}
            onClick={() => setViewMode('list')}
          >
            List
          </Button>
        </Stack>

        {/* SIDEBAR POSITION */}
        <Stack direction="row" spacing={1}>
          <Button
            variant={!isReversed ? 'contained' : 'outlined'}
            onClick={() => setIsReversed(false)}
          >
            Sidebar Right
          </Button>
          <Button
            variant={isReversed ? 'contained' : 'outlined'}
            onClick={() => setIsReversed(true)}
          >
            Sidebar Left
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={4}>
        {isReversed ? (
          <>
            {Sidebar}
            {MainContent}
          </>
        ) : (
          <>
            {MainContent}
            {Sidebar}
          </>
        )}
      </Grid>

      {/* BANNER */}
      <Box
        sx={{
          mt: 4,
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
        }}
      >
        <HeroCarousel single initialIndex={3} />
      </Box>
    </Container>
  );
};

export default Shop;
