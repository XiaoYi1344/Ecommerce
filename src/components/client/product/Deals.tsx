'use client';

import React from 'react';
import Image from 'next/image';
import {
  Typography,
  Box,
  Stack,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslate } from '@/hooks/useTranslate';
import { Deals } from '@/components/data/Deal';
import { Countdown } from './Countdown';

export default function DealsSection() {
  const { t } = useTranslate();

  return (
    <Box sx={{ width: '100%', mt: 6, mb: 9 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight={700} sx={{ color: '#253D4E' }}>
          {t('deal', 'title')} {/* ví dụ: Deals Of The Day */}
        </Typography>

        <Button
          variant="text"
          sx={{
            color: '#3BB77E',
            textTransform: 'capitalize',
            '&:hover': { color: '#2A9664' },
          }}
        >
          {t('deal', 'all_deals')} →
        </Button>
      </Stack>

      {/* Card List */}
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {Deals.map((item) => (
          <Stack key={item.id} spacing={2} direction="column" mb={10}>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={299}
                height={285}
                style={{
                  width: '100%', // ⭐ BẮT BUỘC
                  height: 'auto', // ⭐ BẮT BUỘC
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box sx={{ position: 'relative' }}>
              {/* Countdown responsive */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 140, sm: 160, md: 180 },
                  left: { xs: 12, sm: 65, md: 24 },
                  zIndex: 10,
                }}
              >
                <Countdown startTime={item.startTime} endTime={item.endTime} />
              </Box>

              {/* Card responsive giữ nguyên kích thước nhưng đổi vị trí theo màn hình */}
              <Card
                sx={{
                  width: {
                    xs: 'calc(100% - 24px)', // 👍 FULL WIDTH TRONG MOBILE
                    sm: 'calc(100% - 24px)',
                    md: 'calc(100% - 24px)',
                  },
                  height: 170,
                  position: 'absolute',
                  top: { xs: -80, sm: -90, md: -100 },
                  left: { xs: 12, sm: 40, md: 10 },
                  borderRadius: 3,
                  border: '1px solid #FFF',
                  zIndex: 11,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ color: '#253D4E' }}
                  >
                    {t('deal', item.name)}
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      fontSize: 16,
                      display: 'block',
                      mt: 0.5,
                    }}
                  >
                    <Box component="span" sx={{ color: '#7E7E7E' }}>
                      {t('type', 'by')}{' '}
                    </Box>
                    <Box
                      component="span"
                      sx={{ color: '#3BB77E', fontWeight: 400 }}
                    >
                      {item.brand}
                    </Box>
                  </Typography>

                  {/* Price + Add Button */}
                  <Stack direction="row" spacing={1} mt={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        fontSize={17}
                        sx={{
                          color: '#3BB77E',
                          borderBottom: '1.5px solid #3BB77E',
                          pb: '2px',
                          lineHeight: 0.6,
                          display: 'inline-block',
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>

                      <Typography
                        variant="body2"
                        fontSize={13}
                        sx={{
                          textDecoration: 'line-through',
                          color: '#ADADAD',
                        }}
                      >
                        ${item.oldPrice.toFixed(2)}
                      </Typography>
                    </Box>

                    <Button
                      sx={{
                        minWidth: 10,
                        height: 36,
                        flexShrink: 0,
                        borderRadius: '12px',
                        color: '#29A56C',
                        border: '1px solid #DEF9EC',
                        backgroundColor: '#DEF9EC',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        transition: 'all 0.25s ease',
                        '&:hover': { backgroundColor: '#DEF9EC' },
                        '&:hover .btn-text': {
                          opacity: 0,
                          transform: 'translateX(-6px)',
                        },
                        '&:hover .btn-icon': {
                          transform: 'translateX(18px)',
                        },
                      }}
                    >
                      {/* Icon */}
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
                            filter:
                              'brightness(0) saturate(100%) invert(49%) sepia(88%) saturate(367%) hue-rotate(96deg) brightness(92%) contrast(90%)',
                          }}
                        />
                      </Box>

                      {/* Text */}
                      <Box
                        className="btn-text"
                        sx={{
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap',
                          fontSize: 12,
                        }}
                      >
                        {t('product', 'add')}
                      </Box>
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
