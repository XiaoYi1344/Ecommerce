'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Box,
  Grid,
  Typography,
  Stack,
  Select,
  MenuItem,
  Card,
  CardContent,
  Pagination,
} from '@mui/material';
import { Blog } from '@/components/data/Blog';
import { ArrowDownUp, ChevronDown, ChevronUp } from 'lucide-react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Link from 'next/link';

export default function RecipesList() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('newest');
  const [show, setShow] = useState(6);

  // ✔ ĐÚNG
  const [openSelect, setOpenSelect] = useState(false);

  // Sort dropdown state
  const [open, setOpen] = useState(false);

  // 🎯 Correct Sorting Logic
  const sortedData = useMemo(() => {
    const data = [...Blog];

    switch (sort) {
      case 'newest':
        return data; // giữ nguyên
      case 'oldest':
        return [...data].reverse();
      case 'side_dish':
        return data.filter((item) => item.category === 'Side Dish');
      case 'soups_and_stews':
        return data.filter((item) => item.category === 'Soups and Stews');
      case 'salad':
        return data.filter((item) => item.category === 'Salad');
      case 'vegan':
        return data.filter((item) => item.category === 'Vegan');
      case 'breakfast':
        return data.filter((item) => item.category === 'Breakfast');
      case 'dessert':
        return data.filter((item) => item.category === 'Dessert');
      case 'gluten_free':
        return data.filter((item) => item.category === 'Gluten Free');
      case 'dairy_free':
        return data.filter((item) => item.category === 'Dairy Free');
      case 'vegetarian':
        return data.filter((item) => item.category === 'Vegetarian');
      case 'soups':
        return data.filter((item) => item.category === 'Soups');
      default:
        return data;
    }
  }, [sort]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / show);
  const paginated = sortedData.slice((page - 1) * show, page * show);

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      {/* Header */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
        spacing={2}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Recipes Articles
        </Typography>

        {/* Filters */}
        <Stack direction="row" spacing={2}>
          {/* Sort Dropdown */}
          <Box
            component="div"
            role="button"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid #ECECEC',
              background: '#fff',
              padding: '6px 12px',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: '0.2s',
              '&:hover': { background: 'rgba(59,183,126,0.08)' },
            }}
          >
            <Typography
              fontWeight={600}
              fontSize={14}
              color="#777777"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <ArrowDownUp size={16} strokeWidth={2} color="#ABABAB" /> Sort:
            </Typography>

            <Select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              size="small"
              IconComponent={() =>
                open ? (
                  <ChevronUp size={20} strokeWidth={2} />
                ) : (
                  <ChevronDown size={20} strokeWidth={2} />
                )
              }
              sx={{
                minWidth: 20,
                background: 'transparent',
                color: '#7E7E7E',
                fontWeight: 600,
                fontSize: 13,
                ml: 0.5,
                pr: 0.5,

                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none !important',
                },

                '& .MuiSelect-select': {
                  p: '0 !important',
                  display: 'flex',
                  alignItems: 'center',
                },

                '& .MuiSelect-icon': {
                  right: 0,
                },
              }}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>

              <MenuItem value="side_dish">Side Dish</MenuItem>
              <MenuItem value="soups_and_stews">Soups & Stews</MenuItem>
              <MenuItem value="salad">Salad</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="dessert">Dessert</MenuItem>
              <MenuItem value="gluten_free">Gluten Free</MenuItem>
              <MenuItem value="dairy_free">Dairy Free</MenuItem>
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="soups">Soups</MenuItem>
            </Select>
          </Box>

          {/* Show per page */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid rgba(59, 183, 126, 0.4)',
              background: '#fff',
              padding: '6px 12px',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: '0.2s',
              '&:hover': { background: 'rgba(59,183,126,0.08)' },
            }}
          >
            <Typography fontWeight={600} fontSize={14} color="#777">
              <WidgetsIcon sx={{ fontSize: 14, color: '#ABABAB', mt: -0.2 }} />{' '}
              Show:
            </Typography>

            <Select
              size="small"
              value={show}
              onChange={(e) => {
                setShow(Number(e.target.value));
                setPage(1);
              }}
              IconComponent={(props) =>
                openSelect ? (
                  <ChevronUp size={24} strokeWidth={2} />
                ) : (
                  <ChevronDown size={24} strokeWidth={2} />
                )
              }
              sx={{
                color: '#7E7E7E',
                minWidth: 20,
                background: 'transparent',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-select': {
                  p: '0 !important',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiSelect-icon': { right: 0 },
                fontSize: 13,
                ml: 0.5,
                pr: 0.5,
              }}
            >
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Stack>

      {/* Blog Cards */}
      {/* <Grid container spacing={3}>
        {paginated.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{ overflow: 'hidden', border: 'none', boxShadow: 'none' }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={369}
                height={302}
                style={{ width: '100%', height: 'auto', borderRadius: 20 }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: '#B6B6B6', fontSize: 12, fontWeight: 700 }}
                >
                  {item.category}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 700,
                    color: '#253D4E',
                    fontSize: 22,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#7E7E7E',
                    mt: 1,
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  {item.date} • {item.view} views • {item.time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={3}>
  {paginated.map((item) => (
    <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          overflow: 'hidden',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        {/* Image click */}
        <Link href={`/blog/${item.id}`}>
          <Image
            src={item.image}
            alt={item.title}
            width={369}
            height={302}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 20,
              cursor: 'pointer',
            }}
          />
        </Link>

        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant="subtitle2"
            sx={{ color: '#B6B6B6', fontSize: 12, fontWeight: 700 }}
          >
            {item.category}
          </Typography>

          {/* Title click */}
          <Link
            href={`/blog/${item.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: 700,
                color: '#253D4E',
                fontSize: 22,
                cursor: 'pointer',
                transition: '0.2s',
                '&:hover': { color: '#3bb77e' },
              }}
            >
              {item.title}
            </Typography>
          </Link>

          <Typography
            variant="body2"
            sx={{ color: '#7E7E7E', mt: 1, fontSize: 13 }}
          >
            {item.date} • {item.view} views • {item.time}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
