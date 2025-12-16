'use client';

import Image from 'next/image';
import { Box, Typography, Stack, Rating, Card } from '@mui/material';
import { useTranslate } from '@/hooks/useTranslate';
import { Products } from '@/components/data/Product';

export default function BestProductsSection() {
  const { t } = useTranslate();

  // --- DATA LOGIC ---
  const topSelling = [...Products]
    .sort((a, b) => Number(b.discount) - Number(a.discount))
    .slice(0, 3);
  const trending = [...Products].sort((a, b) => b.rate - a.rate).slice(0, 3);
  const recently = [...Products]
    .sort(
      (a, b) => Number(b.id.replace('p', '')) - Number(a.id.replace('p', '')),
    )
    .slice(0, 3);
  const topRated = [...Products].filter((p) => p.rate > 2).slice(0, 3);

  // Mapping từng nhóm
  const groups = [
    { title: 'Top Selling', data: topSelling },
    { title: 'Trending Products', data: trending },
    { title: 'Recently added', data: recently },
    { title: 'Top Rated', data: topRated },
  ];

  return (
    <Box sx={{ width: '100%', mt: 5, mb: 6 }}>
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {groups.map((group, idx) => (
          <Box key={idx}>
            {/* Section Title */}
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                position: 'relative',
                pb: 1,
                mb: 2,
                borderBottom: '2px solid #e5e5e5',
                width: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '120px',
                  height: '2px',
                  backgroundColor: '#b7e4c7',
                  borderRadius: '2px',
                },
                color: '#253D4E',
              }}
            >
              {group.title}
            </Typography>

            {/* Product List */}
            <Stack spacing={2}>
              {group.data.map((p) => (
                <Card
                  key={p.id}
                  className="border-none"
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    background: 'transparent', // nếu muốn giống như không phải card
                  }}
                >
                  <Stack direction="row" spacing={2} border="none">
                    {/* Image */}
                    <Box sx={{ width: 70, height: 70, position: 'relative' }}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </Box>

                    {/* Content */}
                    <Stack spacing={0.5}>
                      {/* Product Name */}
                      <Typography
                        variant="body1"
                        className="font-semibold text-[#253D4E]"
                      >
                        {t('product', p.name)}
                      </Typography>

                      {/* Rating */}
                      <Rating
                        value={p.rate}
                        readOnly
                        sx={{
                          fontSize: 15, // đổi size (px)
                          color: '#FDC040', // màu của icon filled
                          '& .MuiRating-iconEmpty': {
                            color: '#ddd', // màu icon rỗng
                          },
                        }}
                      />

                      {/* Price */}
                      <Typography
                        variant="body1"
                        className="text-[#3BB77E] font-bold"
                      >
                        ${p.price.toFixed(2)}{' '}
                        <span className="text-[#ADADAD] line-through text-sm ml-1">
                          ${p.oldPrice.toFixed(2)}
                        </span>
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
