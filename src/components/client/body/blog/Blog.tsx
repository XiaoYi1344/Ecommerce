import { Container, Grid } from '@mui/material';
import React from 'react';
import RecipesList from './BlogSec';
import { CategoryBox } from '../../sidebar/category/CategoryBox';
import { TagsBox } from '../../sidebar/TagsBox';
import { NewProductsBox } from '../../sidebar/NewProductsBox';
import HeroCarousel from '../home/banner/banner';
import { slides } from '@/components/data/Slides';

const Blog = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: 1340 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 9 }}>
          <RecipesList />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <CategoryBox />
          <NewProductsBox title="Trending Now" />
          <NewProductsBox title="Gallery" imageOnly />
          <TagsBox />
        </Grid>
      </Grid>

      <HeroCarousel single initialIndex={slides.length - 1} />
    </Container>
  );
};

export default Blog;
