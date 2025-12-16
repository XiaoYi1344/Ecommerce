'use client';

import Image from 'next/image';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  useMediaQuery,
  Card,
} from '@mui/material';
import { useTranslate } from '@/hooks/useTranslate';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef } from 'react';
import { Categories } from '@/components/data/Category';

export default function ShopByCategories() {
  const { t } = useTranslate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={700} sx={{ color: '#253D4E' }}>
          {t('categories', 'shop_by_category')}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="body2"
            sx={{ color: '#3BB77E', fontWeight: 600, cursor: 'pointer' }}
          >
            {t('categories', 'all_categories')} →
          </Typography>

          {!isMobile && (
            <>
              <IconButton
                onClick={scrollLeft}
                sx={{
                  border: '1px solid #dce1e5',
                  width: 32,
                  height: 32,
                }}
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>

              <IconButton
                onClick={scrollRight}
                sx={{
                  border: '1px solid #dce1e5',
                  width: 32,
                  height: 32,
                }}
              >
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </>
          )}
        </Stack>
      </Stack>

      {/* Scroll Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {Categories.map((cat, index) => (
          <Card
            key={index}
            // className="rounded-2xl shadow-sm hover:shadow-md transition"
            sx={{
              minWidth: 165,
              p: { xs: '10px 10px', md: '20px 12px' },
              border: '1px solid #edf1f4',
              borderRadius: 3,

            }}
          >
            <Stack alignItems="center" spacing={1}>
              {/* Icon */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={`/icons/categ/${cat.icon}.png`}
                  alt={cat.label}
                  width={40}
                  height={40}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{
                  color: '#253D4E',
                  textAlign: 'center',
                  fontSize: { xs: 12.9, md: 15 },
                }}
              >
                {t('categories', cat.label)}
              </Typography>

              {/* Items count (random hoặc thêm field mới) */}
              <Typography
                variant="body2"
                sx={{
                  color: '#8b9aa5',
                  textAlign: 'center',
                  fontSize: { xs: 12.5, md: 16 },
                }}
              >
                12 items
              </Typography>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
