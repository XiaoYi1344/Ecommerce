'use client';
import { HeaderSection } from '@/components/data/Contact';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function InfoSection() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box className="mx-30 mt-10 px-4">
        {HeaderSection.map((header, index) => {
          const col2 = header.items.filter((_, i) => i === 0 || i === 2); // 1 & 3
          const col3 = header.items.filter((_, i) => i === 1 || i === 3); // 2 & 4

          return (
            <Box key={index} mb={10}>
              {/* LEFT COLUMN (TITLE + DESC) */}
              <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography color="#3bb77e" fontWeight={600}>
                    How can help you?
                  </Typography>

                  <Typography variant="h4" fontWeight={700} mt={1} mb={2}>
                    {header.title}
                  </Typography>

                  <Typography className="text-gray-500" maxWidth={600}>
                    {header.description}
                  </Typography>
                </Grid>

                {/* RIGHT 2 COLUMNS */}
                <Grid size={{ xs: 12, md: 8 }}>
                  <Grid container spacing={4}>
                    {/* COLUMN 2 - item 1 & 3 */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack spacing={4}>
                        {col2.map((item) => (
                          <Box key={item.id}>
                            <Typography fontWeight={600} mb={1}>
                              {item.id}. {item.title}
                            </Typography>
                            <Typography className="text-gray-500">
                              {item.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Grid>

                    {/* COLUMN 3 - item 2 & 4 */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack spacing={4}>
                        {col3.map((item) => (
                          <Box key={item.id}>
                            <Typography fontWeight={600} mb={1}>
                              {item.id}. {item.title}
                            </Typography>
                            <Typography className="text-gray-500">
                              {item.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
    </motion.div>
  );
}
