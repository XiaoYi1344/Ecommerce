'use client';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import { LocationSection } from '@/components/data/Contact';

// The leaflet map depends on browser APIs, so load it dynamically with no SSR
const MapLeaflet = dynamic(() => import('./Map'), { ssr: false });

export function ViewSection() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box className="mx-auto mt-10 px-4">
        {/* Map wrapped in Card */}
        <Card className="rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <MapLeaflet />
          </CardContent>
        </Card>

        <Grid container spacing={4} mt={4} mx={15}>
          {LocationSection.map((loc) => (
            <Grid size={{ xs: 12, md: 4 }} key={loc.title}>
              <Typography variant="h6" fontWeight={700}>
                {loc.title}
              </Typography>
              <Typography className="text-gray-500" mt={1}>
                {loc.address}
              </Typography>
              <Typography className="text-gray-500">Phone: {loc.phone}</Typography>
              <Typography className="text-gray-500">Email: {loc.email}</Typography>
              <Button variant="contained" sx={{ mt: 2, background: '#3bb77e' }}>
                View map
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
