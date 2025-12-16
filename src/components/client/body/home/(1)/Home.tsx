import BestProductsSection from '@/components/client/product/BestProductsSection';
import DealsSection from '@/components/client/product/Deals';
import ProductGrid from '@/components/client/product/ProductGrid';
import { CategoryBox } from '@/components/client/sidebar/category/CategoryBox';
import ShopByCategories from '@/components/client/sidebar/category/ShopByCategories';
import { TagsBox } from '@/components/client/sidebar/TagsBox';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import HeroCarousel from '../banner/banner';
import { AdCateg } from '@/components/client/sidebar/category/AdCateg';
import { slides } from '@/components/data/Slides';

export const Home = () => {
  const slidesNoCustom = slides.filter((slide) => !slide.custom);
  return (
    <>
      <HeroCarousel slides={slidesNoCustom} />
      <Container maxWidth={false} sx={{ maxWidth: '1340px' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 7.5, md: 9.5 }}>
            <ProductGrid />
          </Grid>
          <Grid size={{ xs: 12, sm: 4.5, md: 2.5 }} spacing={4}>
            <CategoryBox />
            <TagsBox />
          </Grid>
        </Grid>
        <DealsSection />
        <AdCateg />
        <ShopByCategories />
        <BestProductsSection />
        <Box
          sx={{
            borderRadius: 3, // 24px
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          }}
        >
          <HeroCarousel single initialIndex={3} />
        </Box>
      </Container>
    </>
  );
};
