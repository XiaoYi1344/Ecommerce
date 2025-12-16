'use client';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Contact_Form() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box className="mx-30 mt-16 px-4 mb-10">
        <Typography color="#3bb77e" fontWeight={600}>
          Contact form
        </Typography>
        <Typography variant="h4" fontWeight={700} mt={1}>
          Drop Us a Line
        </Typography>
        <Typography className="text-gray-500" mt={1}>
          Your email address will not be published. Required fields are marked *
        </Typography>

        <Grid container spacing={4} mt={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="First Name" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Your Email" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Your Phone" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Subject" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth multiline rows={6} label="Message" />
              </Grid>
            </Grid>
            <Button variant="contained" sx={{ mt: 3, background: '#253D4E' }}>
              Send message
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Image
              src="/about/contact.png"
              width={400}
              height={400}
              alt="lady"
              className="rounded-xl"
            />
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
