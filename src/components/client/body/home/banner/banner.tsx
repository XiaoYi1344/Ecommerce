'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { Box, Button, Input, InputAdornment, Typography } from '@mui/material';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { alignItems } from '@mui/system';
import { slides } from '@/components/data/Slides';

export interface Slide {
  banner: string;
  title1: string;
  title2: string;
  custom?: string;
  width?: number;
  height?: number;
}

interface HeroCarouselProps {
  initialIndex?: number;
  single?: boolean;
  slides?: Slide[]; // để override slides mặc định
  showNav?: boolean; // hiển thị arrows & dots khi single=true
}


export default function HeroCarousel({
  initialIndex = 0,
  single = false,
}: HeroCarouselProps) {
  const autoplayOptions = React.useRef({
    delay: 4000,
    stopOnInteraction: false,
  });

  const filteredSlides = single ? [slides[initialIndex]] : slides;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: !single, startIndex: initialIndex },
    single ? [] : [Autoplay(autoplayOptions.current)],
  );

  const onNavClick = React.useCallback(() => {
    if (!emblaApi || single) return;
    const auto = emblaApi.plugins()?.autoplay as AutoplayType | undefined;
    auto?.reset();
  }, [emblaApi, single]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavClick,
  );

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Viewport */}
      <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex' }}>
          {filteredSlides.map((item, index) => {
            const isCenterBanner = initialIndex === index; // ảnh được chọn

            return (
              <Box
                key={index}
                sx={{
                  flex: '0 0 100%',
                  position: 'relative',
                  height: { xs: 360, md: 450 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isCenterBanner ? 'center' : 'flex-start',
                  px: { xs: 2, md: 10 },
                }}
              >
                <Image
                  src={item.banner}
                  alt="banner"
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.92)' }}
                />

                <Box
                  sx={{
                    zIndex: 3,
                    maxWidth: 600,
                    textAlign: isCenterBanner ? 'center' : 'left',
                  }}
                >
                  <Typography fontSize={{ xs: 26, md: 42 }} fontWeight={700}>
                    {item.title1}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 26, md: 42 }}
                    fontWeight={700}
                    mb={2}
                  >
                    {item.title2}
                  </Typography>

                  <Typography
                    fontSize={{ xs: 14, md: 16 }}
                    color="#7e7e7e"
                    mb={3}
                  >
                    {item.title2 === '' ? (
                      <>
                        Start Your Daily Shopping with{' '}
                        <Box component="span" sx={{ color: '#3BB77E' }}>
                          Nest Mart
                        </Box>
                      </>
                    ) : (
                      'Sign up for the daily newsletter'
                    )}
                  </Typography>

                  <Box>
                    {item.custom ? (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: item.width,
                          height: item.height,
                        }}
                      >
                        <Image
                          src={item.custom}
                          alt="custom"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                    ) : null}
                  </Box>

                  <Input
                    placeholder="Your email address"
                    disableUnderline
                    sx={{
                       width: { xs: '100%', md: item.custom ? '50%' : '94%' },
                       height: item.custom ? 55 : 36,
                      bgcolor: '#fff',
                      px: 2,
                      pr: 0,
                      borderRadius: '30px',
                      border: '1px solid #ddd',
                      '& input': { padding: '6px 0' },
                      // mx: isCenterBanner ? 'auto' : 0,
                      mx: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    endAdornment={
                      <InputAdornment position="end" sx={{ mr: 0, pr: 0 }}>
                        <Button
                          variant="contained"
                          sx={{
                            background: '#3bb77e',
                            borderRadius: '30px',
                            textTransform: 'none',
                            '&:hover': { background: '#2e9c68' },
                            height: item.custom ? 55 : 36,
                            width:120,
                            mr: '-8px',
                          }}
                        >
                          Subscribe
                        </Button>
                      </InputAdornment>
                    }
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ARROWS - ẩn nếu chế độ single */}
      {!single && (
        <>
          <Box
            onClick={() => {
              onNavClick();
              emblaApi?.scrollPrev();
            }}
            sx={{ ...arrowStyle('left') }}
          >
            ‹
          </Box>

          <Box
            onClick={() => {
              onNavClick();
              emblaApi?.scrollNext();
            }}
            sx={arrowStyle('right')}
          >
            ›
          </Box>
        </>
      )}

      {/* DOTS - ẩn nếu single */}
      {!single && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 25,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 1.2,
            zIndex: 20,
          }}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

const arrowStyle = (side: 'left' | 'right') => ({
  position: 'absolute',
  top: '50%',
  [side]: 15,
  transform: 'translateY(-50%)',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.85)',
  fontSize: 32,
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  transition: '0.25s',
  '&:hover': {
    background: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
});

// Dùng như slider bình thường: <HeroCarousel />
// Chỉ show 1 ảnh không có dot và nút: <HeroCarousel single initialIndex={index} />
// Chỉ show 1 ảnh, có nút điều hướng, dots: <HeroCarousel single initialIndex={1} showNav />
// chỉ show 1 ảnh, có nút, khoogn custom: <HeroCarousel slides={slidesNoCustom} single initialIndex={0} showNav />
// Show cả 3 ảnh không có custom: 
    //{
        // import { slides } from '@/data/slides';
        // import HeroCarousel from '@/components/HeroCarousel';
        // const slidesNoCustom = slides.filter(slide => !slide.custom);
        // <HeroCarousel slides={slidesNoCustom} />;
    // }