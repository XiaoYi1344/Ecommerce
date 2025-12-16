'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Box, Typography, Stack, Chip, LinearProgress } from '@mui/material';
import { Products } from '@/components/data/Product';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslate } from '@/hooks/useTranslate';

export default function DailyBestSells() {
  const { t } = useTranslate();

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'deals', label: 'Deals Of The Day' },
    { key: 'beauty', label: 'Beauty' },
    { key: 'bread_juice', label: 'Bread & Juice' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'milks', label: 'Milks' },
  ];

  const [active, setActive] = useState('all');
  const [page, setPage] = useState(0);

  const filtered =
    active === 'all' ? Products : Products.filter((p) => p.category === active);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const visible = filtered.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  const prevPage = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextPage = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <Box className="w-full mt-10">
      {/* ➤ TITLE + BUTTON ARROW + TABS */}
      <Box className="flex items-center justify-between mb-4">
        <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
          {t('deal', 'daily_best_sells')}
        </Typography>

        <Box className="flex gap-2">
          <Button
            onClick={prevPage}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={nextPage}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight />
          </Button>
        </Box>

        <Tabs value={active} onValueChange={setActive} className="mb-4">
          <TabsList>
            {categories.map((c) => (
              <TabsTrigger key={c.key} value={c.key}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Box>

      {/* ➤ MAIN GRID */}
      <Box className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* LEFT BANNER */}
        <Card className="h-[430px] rounded-2xl overflow-hidden relative bg-[#E8F5E9]">
          <Box className="absolute top-10 left-6 z-20 max-w-40">
            <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
              Bring nature into your home
            </Typography>
            <Button className="mt-6">Shop Now</Button>
          </Box>

          <Image
            src="/banner/daily.png"
            alt="banner"
            width={330}
            height={330}
            className="absolute bottom-0 right-0 z-10"
          />
        </Card>

        {/* ➤ PRODUCT LIST */}
        {visible.map((p) => (
          <Card key={p.id} className="p-4 rounded-2xl relative">
            <CardContent className="p-0">
              {/* DISCOUNT CHIP */}
              {p.discount && (
                <Chip
                  label={`${p.discount}%`}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor:
                      Number(p.discount) > 0 ? '#3BB77E' : '#F59758',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 12,
                    height: 24,
                    width: 65,
                    borderRadius: '20px 0 30px 0',
                  }}
                />
              )}

              {/* STATUS CHIP (hot / sale / new) */}
              {(p.hot || p.sale || p.new) && (
                <Chip
                  label={
                    p.hot
                      ? 'Hot'
                      : p.sale
                        ? t('type', 'sale')
                        : t('type', 'new')
                  }
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: -1,
                    backgroundColor: p.hot
                      ? '#F74B81'
                      : p.sale
                        ? '#67BCEE'
                        : '#3BB77E',
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: 12,
                    height: 24,
                    width: 70,
                    borderRadius: '0 20px 0 30px',
                  }}
                />
              )}

              <Image
                src={p.image}
                alt={p.name}
                width={200}
                height={200}
                className="mx-auto"
              />

              <Typography fontWeight={600} className="mt-2">
                {t('product', p.name)}
              </Typography>

              <Stack direction="row" spacing={1} className="mt-1">
                <Typography color="#3BB77E" fontWeight={700}>
                  ${p.price}
                </Typography>
                <Typography
                  sx={{ textDecoration: 'line-through', color: '#ADADAD' }}
                >
                  ${p.oldPrice}
                </Typography>
              </Stack>

              <Box className="mt-3">
                <LinearProgress
                  variant="determinate"
                  value={p.rate * 10}
                  sx={{
                    height: 6,
                    borderRadius: 10,
                    mt: 1,
                    backgroundColor: '#D1F1E0', // màu nền
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#3BB77E', // màu thanh progress
                    },
                  }}
                />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption">Sold: {p.rate}/100</Typography>
                  <Typography variant="caption" color="#3BB77E">
                    {p.rate * 10}%
                  </Typography>
                </Stack>
              </Box>

              <Button className="w-full mt-4 bg-[#3BB77E]">
                <Box
                  className="btn-icon"
                  sx={{
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src="/icons/active/cart.svg"
                    alt="cart"
                    width={17}
                    height={17}
                    style={{
                      filter: 'brightness(0) invert(1)',
                    }}
                  />
                </Box>
                Add to cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
