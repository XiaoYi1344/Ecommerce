'use client';

import * as React from 'react';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Simple } from './simple/simple';
import { Search } from './search/search';
import { Main } from './main/main';
import { WalletButton } from '../wallet/wallet';

export const Navbar = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // >= md
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm')); // >= sm

  const [account, setAccount] = React.useState('');

  return (
    <Box
      sx={{ width: '100%', borderBottom: '1px solid #eee', background: '#fff' }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1396px' }}>
        {/* ------------------ MD+ Screen ------------------ */}
        {isMdUp && (
          <>
            <Simple
              showLanguage
              showCurrency
              showNavItems
              showHelp
              showCenterText
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Search
                compare="full"
                wishlist="full"
                cart="full"
                showLogo
                showSearchBar
                showBecomeVendor
              />
              <WalletButton account={account} setAccount={setAccount} />
            </Box>
            <Main
              showCategory
              showHotDealsNav
              showContact
              showDrawer
              drawerModules={['category', 'hotDealsNav', 'contact']}
            />
          </>
        )}

        {/* ------------------ SM Screen (>= sm && < md) ------------------ */}
        {!isMdUp && isSmUp && (
          <>
            {/* Hàng trên: Simple full width */}
            <Box
              sx={{
                width: '100%',
                mb: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Search showSearchBar />
              <Simple showLanguage />
            </Box>

            {/* Hàng dưới: 3 cột */}
            <Grid container spacing={1} alignItems="center">
              <Grid size={{ xs: 4 }}>
                <Search showLogo />
              </Grid>
              
              <Grid size={{ xs: 4 }}>
                <Search
                  compare="icon-badge"
                  wishlist="icon-badge"
                  cart="icon-badge"
                />
                <WalletButton account={account} setAccount={setAccount} />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Main showDrawer drawerModules={['category', 'contact']} />
              </Grid>
            </Grid>
          </>
        )}

        {/* ------------------ XS Screen (< sm) ------------------ */}
        {!isSmUp && (
          <>
            {/* Hàng trên: 2 cột */}
            <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Grid size={{ xs: 6 }}>
                <Search
                  compare="icon-badge"
                  wishlist="icon-badge"
                  cart="icon-badge"
                />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Simple showLanguage />
              </Grid>
            </Grid>

            {/* Hàng dưới: 2 cột */}
            <Grid
              container
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid>
                <Search showLogo />
              </Grid>
              <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <WalletButton account={account} setAccount={setAccount} />
              </Grid>
              <Grid>
                <Main showDrawer drawerModules={['category']} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};
