'use client';

import React from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Currency, Language, useAppStore } from '@/store/useAppStore';
import { useTranslate } from '@/hooks/useTranslate';
import { NavItems } from '@/components/data/Navbar';

type SimpleProps = {
  showNavItems?: boolean;
  showCenterText?: boolean;
  showHelp?: boolean;
  showLanguage?: boolean;
  showCurrency?: boolean;
};

export const Simple = (props: SimpleProps) => {
  const { language, setLanguage, currency, setCurrency } = useAppStore();
  const { t } = useTranslate();

  const hasAnyProp =
    props.showNavItems ||
    props.showCenterText ||
    props.showHelp ||
    props.showLanguage ||
    props.showCurrency;

  const isFullMode = !hasAnyProp;

  // Nếu KHÔNG truyền props → trả về full mode như cũ
  const showNavItems = hasAnyProp ? props.showNavItems : true;
  const showCenterText = hasAnyProp ? props.showCenterText : true;
  const showHelp = hasAnyProp ? props.showHelp : true;
  const showLanguage = hasAnyProp ? props.showLanguage : true;
  const showCurrency = hasAnyProp ? props.showCurrency : true;

  return (
    <Box
      sx={{
        width: '100%',
        py: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: '13px',
        color: '#6c6c6c',
        backgroundColor: isFullMode ? '#fafafa' : 'transparent',
        borderBottom: isFullMode ? '1px solid #e0e0e0' : 'none',
      }}
    >
      {/* Nav Items */}
      {showNavItems && (
        <Stack
          direction="row"
          spacing={{ xs: 0.7, sm: 1 }}
          flexWrap="wrap"
          alignItems="center"
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          {NavItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                href="#"
                style={{
                  color: '#6c6c6c',
                  textDecoration: 'none',
                  fontSize: 13,
                }}
              >
                {t('top_nav', item)}
              </Link>

              {index < NavItems.length - 1 && (
                <Typography sx={{ color: '#b0b0b0' }}>|</Typography>
              )}
            </React.Fragment>
          ))}
        </Stack>
      )}

      {/* Center Text */}
      {showCenterText && (
        <Typography
          color="#3bb77e"
          fontWeight={600}
          fontSize={{ xs: 11, sm: 12 }}
          textAlign="center"
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          {t('top_nav', 'secure_delivery')}
        </Typography>
      )}

      {/* Right */}
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Help */}
        {showHelp && (
          <Typography fontSize={13}>
            {t('top_nav', 'need_help')}
            <Link
              href={`tel:${t('top_nav', 'call_number')}`}
              style={{
                color: '#3bb77e',
                marginLeft: 6,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {t('top_nav', 'call_number')}
            </Link>
          </Typography>
        )}

        {/* Language */}
        {showLanguage && (
          <FormControl size="small" variant="standard" sx={{ minWidth: 60 }}>
            <Select
              value={language}
              disableUnderline
              onChange={(e: SelectChangeEvent<Language>) =>
                setLanguage(e.target.value as Language)
              }
              sx={{
                fontSize: '13px',
                '& .MuiSelect-standard': { padding: '4px 0' },
                '&::before, &::after': { display: 'none' },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">France</MenuItem>
              <MenuItem value="vn">Vietnamese</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* Currency */}
        {showCurrency && (
          <FormControl size="small" variant="standard" sx={{ minWidth: 60 }}>
            <Select
              value={currency}
              disableUnderline
              onChange={(e: SelectChangeEvent<Currency>) =>
                setCurrency(e.target.value as Currency)
              }
              sx={{
                fontSize: '13px',
                '& .MuiSelect-standard': { padding: '4px 0' },
                '&::before, &::after': { display: 'none' },
              }}
            >
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="eur">EUR</MenuItem>
              <MenuItem value="vnd">VND</MenuItem>
            </Select>
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};

// <Simple /> : gọi full
// <Simple showLanguage /> : chỉ gọi ngôn ngữ
// <Simple showCurrency /> : chỉ gọi tiền tệ
// <Simple showNavItems /> : chỉ gọi nav
// <Simple showHelp /> : chỉ gọi help
// <Simple showCenterText /> : chỉ gọi text
