'use client';

import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from '@mui/material';

import { Button } from '@/components/ui/button';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  PhoneCall,
} from 'lucide-react';
import { contactData, menuData } from '@/components/data/Footer';
import { useTranslate } from '@/hooks/useTranslate';

export default function Footer() {
  const { t } = useTranslate();

  return (
    <Box component="footer" sx={{ bgcolor: '#fff', py: 6, color: '#253D4E' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1420px' }}>
        <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* LEFT LOGO + INFO */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Image
                  src="/custom/logo.png"
                  alt="logo"
                  width={200}
                  height={61.4}
                />
              </Stack>

              <Typography fontSize={17} color="#253D4E" maxWidth={300}>
                {t('footer', 'info')}
              </Typography>

              <Stack spacing={1.3}>
                {contactData.main.map((item, index) => {
                  // nếu bạn vẫn muốn text Call/Email màu xanh nhưng icon KHÔNG phụ thuộc isHighlight,
                  // ta tách iconColor với text color
                  const textIsHighlight =
                    item.label === 'Call Us' || item.label === 'Email';

                  // --- CHỈNH Ở ĐÂY: CHUNG KÍCH THƯỚC VÀ ĐỘ DÀY CHO TẤT CẢ ICON ---
                  const ICON_COLOR = '#3BB77E'; // màu ICON chung cho tất cả (thay đổi nếu cần)

                  const IconComponent = item.icon;

                  return (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        cursor: 'pointer',
                        // đặt màu, transition cho svg (lucide-react dùng stroke="currentColor", nên color áp dụng được)
                        '& svg': {
                          color: ICON_COLOR,
                          transition: 'color 0.18s ease, transform 0.12s ease',
                        },
                        '&:hover svg': {
                          // hover effect optional (giữ cùng màu hoặc làm mạnh hơn)
                          color: ICON_COLOR,
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      {/* bắt buộc truyền size + strokeWidth, không truyền color prop để CSS control */}
                      <IconComponent
                        style={{
                          width: '18px',
                          height: '18px',
                          minWidth: '18px',
                          minHeight: '18px',
                          flexShrink: 0,
                        }}
                        strokeWidth={1.6}
                      />

                      <Typography
                        sx={{
                          fontSize: 15,
                          color: '#253D4E',
                        }}
                      >
                        <strong style={{ fontWeight: 50, marginRight: 6 }}>
                          {t('footer', item.label)}
                        </strong>
                        <span
                          style={{
                            color: textIsHighlight ? '#3BB77E' : '#253D4E',
                          }}
                        >
                          {item.inputs}
                        </span>
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

          {/* MENU COLUMNS */}
          {menuData.map((menu, idx) => (
            <Grid key={idx} size={{ xs: 6, sm: 3, md: 1.5 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontSize: 24, fontWeight: 600 }}
              >
                {t('footer', menu.title)}
              </Typography>

              <Stack spacing={1.2}>
                {menu.info.map((i, j) => (
                  <Typography
                    key={j}
                    fontSize={15}
                    sx={{ cursor: 'pointer', '&:hover': { color: '#3BB77E' } }}
                  >
                    {t('footer', i.label)}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* INSTALL APP */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: 18, fontWeight: 600 }}
            >
              {t('footer', 'install_app')}
            </Typography>

            <Typography fontSize={14} color="#253D4E" mb={2}>
              {t('footer', 'app')}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Image
                src="/social/app_stote.jpg"
                alt="App Store"
                width={140}
                height={45}
                style={{ borderRadius: 8 }}
              />
              <Image
                src="/social/google_play.jpg"
                alt="Google Play"
                width={140}
                height={45}
                style={{ borderRadius: 8 }}
              />
            </Stack>

            <Typography fontSize={14} mt={2} color="#253D4E">
              {t('footer', 'visa')}
            </Typography>

            <Image
              src="/social/visa.png"
              alt="payment"
              width={260}
              height={40}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        {/* SECTION 2: BOTTOM AREA */}
        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3} alignItems="center">
          {/* COPYRIGHT */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography fontSize={14} color="#7E7E7E" maxWidth={330}>
              © 2025, Nest – WordPress Ecommerce Template All rights reserved.
            </Typography>
          </Grid>

          {/* HOTLINES */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={4} justifyContent="center">
              <Stack alignItems="center">
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <PhoneCall size={30} color="#7E7E7E" />

                  <Box>
                    <Typography
                      variant="h6"
                      fontSize={26}
                      color="#3BB77E"
                      fontWeight={600}
                    >
                      19006666
                    </Typography>
                    <Typography fontSize={12} color="#7E7E7E" marginTop='-8px' fontFamily="Lato, sans-serif">
                      Working 8:00 - 22:00
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <PhoneCall size={30} color="#7E7E7E" />

                  <Box>
                    <Typography
                      variant="h6"
                      fontSize={25}
                      color="#3BB77E"
                      fontWeight={600}
                    >
                      1900648888
                    </Typography>
                    <Typography fontSize={12} color="#7E7E7E" marginTop='-8px' fontFamily="Lato, sans-serif">
                      {t('main_nav', '24/7_support')}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* SOCIAL */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography fontSize={14} color="#253D4E" fontWeight={600}>
                {t('footer', 'follow')}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                }}
              >
                {[FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon].map(
                  (Icon, i) => (
                    <Button
                      key={i}
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                      style={{
                        backgroundColor: '#3BB77E',
                        borderColor: '#3BB77E',
                        color: '#fff',
                        width: 34,
                        height: 34,
                      }}
                    >
                      <Icon size={17} />
                    </Button>
                  ),
                )}
              </Box>
            </Stack>
            <Typography fontSize={14} color="#7E7E7E" textAlign="right">
              {t('footer', 'sale')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
