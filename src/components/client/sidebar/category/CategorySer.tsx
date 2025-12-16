'use client';

import Image from 'next/image';
import { Box, Typography, Stack, Container, Card } from '@mui/material';
import { useTranslate } from '@/hooks/useTranslate';
import { Services } from '@/components/data/Deal';

export default function CategorySer() {
  const { t } = useTranslate();

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            width: '100%',
            overflowX: { xs: 'auto', md: 'unset' }, // ✅ mobile scroll, desktop không
            scrollBehavior: 'smooth',
            pb: 1,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {Services.map((ser, index) => (
            <Card
              key={index}
              className="rounded-2xl hover:shadow-md transition"
              sx={{
                flex: {
                  xs: '0 0 45%',
                  md: '0 0 33%',
                  lg: '0 0 25%',
                  xl: '0 0 20%',
                },
                height: 'auto',
                padding: { xs: 1.5, sm: 2, md: 3 },
                border: '1px solid #F4F6FA',
                backgroundColor: '#F4F6FA',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Stack alignItems="center" spacing={1} direction="row">
                {/* Icon */}
                <Box
                  sx={{
                    width: 45,
                    height: 60,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={ser.icon}
                    alt={t('deal', ser.title)}
                    width={45} // số cố định
                    height={60} // số cố định
                    style={{
                      width: '100%', // scale theo Box
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ color: '#242424', fontSize: 17 }}
                  >
                    {t('deal', ser.title)}
                  </Typography>

                  <Typography
                    variant="body2"
                    fontWeight={400}
                    sx={{ color: '#ADADAD', fontSize: 14 }}
                  >
                    {t('deal', ser.description)}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
