'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  InputAdornment,
  Stack,
  Typography,
  Badge,
  Popover,
  Container,
} from '@mui/material';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import { useTranslate } from '@/hooks/useTranslate';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';

type ModuleMode = 'icon' | 'icon-badge' | 'full';

type SearchProps = {
  showLogo?: boolean;
  showSearchBar?: boolean;
  showBecomeVendor?: boolean;
  compare?: ModuleMode;
  wishlist?: ModuleMode;
  cart?: ModuleMode;
};

export const Search = ({
  showLogo,
  showSearchBar,
  showBecomeVendor,
  compare,
  wishlist,
  cart,
}: SearchProps) => {
  const { t } = useTranslate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeModal, setActiveModal] = useState<'compare' | 'wishlist' | null>(
    null,
  );

  const router = useRouter();

  const openDropdown = (
    event: React.MouseEvent<HTMLElement>,
    name: 'compare' | 'wishlist',
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveModal(name);
  };

  const closeDropdown = () => {
    setAnchorEl(null);
    setActiveModal(null);
  };

  const goToCart = () => {
    nProgress.start();
    router.push('/cart');
  };

  const hasAnyProp =
    showLogo ||
    showSearchBar ||
    showBecomeVendor ||
    compare ||
    wishlist ||
    cart;

  const _showLogo = hasAnyProp ? showLogo : true;
  const _showSearchBar = hasAnyProp ? showSearchBar : true;
  const _showBecomeVendor = hasAnyProp ? showBecomeVendor : true;
  const _compare = hasAnyProp ? compare : 'full';
  const _wishlist = hasAnyProp ? wishlist : 'full';
  const _cart = hasAnyProp ? cart : 'full';

  const renderModule = (
    name: 'compare' | 'wishlist' | 'cart',
    mode: ModuleMode | undefined,
    count: number,
    icon: string,
    onClick?: () => void,
  ) => {
    if (!mode) return null;

    const iconElement = <Image src={icon} alt={name} width={20} height={20} />;

    const badgeElement =
      mode === 'icon-badge' || mode === 'full' ? (
        <Badge
          badgeContent={count}
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#3bb77e',
              color: '#fff',
              fontSize: '10px',
              width: '15px',
              height: '15px',
            },
          }}
        >
          {iconElement}
        </Badge>
      ) : (
        iconElement
      );

    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        {badgeElement}

        {mode === 'full' && (
          <button
            onClick={
              name === 'compare' || name === 'wishlist'
                ? (e) => openDropdown(e, name)
                : onClick
            }
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <Typography
              fontFamily="inherit"
              fontWeight={340}
              fontSize={13}
              color="#0009"
            >
              {t('middle_nav', name)}
            </Typography>
          </button>
        )}
      </Stack>
    );
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: '1396px' }}>
        <Box
          sx={{
            width: '100%',
            py: { xs: 1.5, md: 2 },
            display: 'flex',
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            gap: { xs: 2, lg: 0 },
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3, md: 5 }}
            alignItems="center"
            sx={{ width: { xs: '100%', lg: '55%' } }}
          >
            {_showLogo && (
              <Link href="/" prefetch={false}>
                <Image
                  src="/custom/logo.png"
                  alt="logo"
                  width={120}
                  height={30}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            )}

            {_showSearchBar && (
              <Input
                placeholder={t('middle_nav', 'search_placeholder')}
                disableUnderline
                fullWidth
                sx={{
                  width: { xs: '100%', md: '80%' },
                  height: { xs: '36px', md: '40px' },
                  border: '1px solid #BCE3C9',
                  borderRadius: '3px',
                  px: 2,
                  py: 1,
                  pr: 0.2,

                  '&:focus-within': {
                    boxShadow: '0 0 0 3px rgba(59,183,126,0.2)',
                    border: 'none',
                  },

                  '& input': {
                    padding: 0,
                    fontSize: '12px',
                    fontStyle: 'italic',
                  },
                }}
                endAdornment={
                  <InputAdornment position="end" sx={{ p: 0 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: '#3bb77e',
                        height: '35px',
                        borderRadius: '3px',
                        px: 2,
                        minWidth: '75px',
                        fontSize: '10px',
                        boxShadow: 'none',
                      }}
                    >
                      {t('middle_nav', 'search_button')}
                    </Button>
                  </InputAdornment>
                }
              />
            )}
          </Stack>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, sm: 2.5, md: 3 }}
            alignItems="center"
            sx={{
              width: { xs: '100%', lg: 'auto' },
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}
          >
            {_showBecomeVendor && (
              <Button
                endIcon={<EastIcon />}
                sx={{
                  background: '#fff',
                  border: '1.5px solid #0001',
                  color: '#3bb77e',
                  px: 2,
                  borderRadius: '3px',
                  textTransform: 'none',
                  fontSize: '11px',
                }}
              >
                {t('middle_nav', 'become_vendor')}
              </Button>
            )}

            <Stack direction="row" spacing={3}>
              {renderModule(
                'compare',
                _compare,
                1,
                '/icons/active/compare.png',
              )}
              {renderModule('wishlist', _wishlist, 1, '/icons/active/like.png')}
              {renderModule(
                'cart',
                _cart,
                1,
                '/icons/active/cart.svg',
                goToCart,
              )}
            </Stack>
          </Stack>
        </Box>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={closeDropdown}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          PaperProps={{
            sx: {
              p: 2,
              borderRadius: 2,
              boxShadow: '0px 5px 20px rgba(0,0,0,0.15)',
              minWidth: 250,
            },
          }}
        >
          {activeModal === 'compare' && (
            <Typography fontWeight={500}>Compare List</Typography>
          )}
          {activeModal === 'wishlist' && (
            <Typography fontWeight={500}>Wishlist Items</Typography>
          )}
        </Popover>
      </Container>
    </>
  );
};

//   <Search /> : full
//   <Search compare="full" /> : lấy full compare (icon, badge, text)
//   <Search wishlist="icon-badge" /> : lấy icon và badge wishlist
//   <Search cart="icon" /> : chỉ lấy icon cart
//   <Search showLogo /> : lấy logo
//   <Search showSearchBar /> : lấy search
//   <Search showBecomeVendor /> : lấy nút vendor
