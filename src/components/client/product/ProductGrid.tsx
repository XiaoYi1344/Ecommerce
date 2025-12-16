// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Tabs,
//   Tab,
//   Box,
//   Rating,
//   Chip,
//   Grid,
//   Typography,
//   Stack,
//   Button,
// } from '@mui/material';
// import { useTranslate } from '@/hooks/useTranslate';
// import { Products } from '@/components/data/Product';
// import { MiniCategories } from '@/components/data/Category';

// export default function ProductGrid() {
//   const { t } = useTranslate();
//   const [active, setActive] = useState('all');

//   const filteredProducts =
//   active === 'all'
//     ? Products
//     : Products.filter(p => p.category === active);

//   return (
//     <Box sx={{ width: '100%', mt: 4 }}>
//       <Stack direction="row" justifyContent="space-between" alignItems="center">
//       </Stack>
//       <Box sx={{ mb: 3 }}>
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           {/* Title */}
//           <Typography variant="h5" fontWeight={600}>
//             {t('product', 'popular')} {/* hoặc “Popular Products” */}
//           </Typography>

//           {/* Tabs */}
//           <Tabs
//             value={active}
//             onChange={(e, val) => setActive(val)}
//             variant="scrollable"
//             scrollButtons="auto"
//             allowScrollButtonsMobile
//             sx={{
//               '& .MuiTab-root': {
//                 textTransform: 'none',
//                 fontWeight: 600,
//                 fontSize: 13,
//                 mx: 0.5,
//                 px: 2,
//                 borderRadius: 2,
//               },
//               '& .Mui-selected': {
//                 color: '#3BB77E',
//                 backgroundColor: '#E6F7F1',
//               },
//               '& .MuiTabs-indicator': {
//                 height: 3,
//                 borderRadius: 3,
//                 backgroundColor: '#3BB77E',
//               },
//             }}
//           >
//             {MiniCategories.map((c) => (
//               <Tab
//                 key={c.id}
//                 value={c.id}
//                 label={t('categories', c.label)}
//                 sx={{
//                   textTransform: 'none',
//                   fontWeight: 600,
//                   fontSize: 12,
//                   p: 1.4,
//                 }}
//               />
//             ))}
//           </Tabs>
//         </Stack>
//       </Box>

//       {/* Product Grid */}
//       <Grid container spacing={3} sx={{ mt: 3 }}>
//         {filteredProducts.map((p) => (
// <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }} key={p.id}>
//   <Box sx={{ position: 'relative' }}>
//     {/* Discount badge */}
//     <Box
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         display: 'flex',
//         gap: 0.5,
//       }}
//     >
//       {/* Discount chip */}
//       {Number(p.discount) !== 0 && (
//         <Chip
//           label={`${p.discount}%`}
//           size="small"
//           sx={{
//             backgroundColor:
//               Number(p.discount) > 0 ? '#3BB77E' : '#F59758',
//             color: '#fff',
//             fontWeight: 600,
//             fontSize: 12,
//             height: 24,
//             width: 60,
//             borderTopLeftRadius: 20,
//             borderBottomLeftRadius: 0,
//             borderTopRightRadius: 0,
//             borderBottomRightRadius: 30,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         />
//       )}

//       {/* Status chip (hot/sale/new) */}
//       {(p.hot || p.sale || p.new) && (
//         <Chip
//           label={
//             p.hot
//               ? 'Hot'
//               : p.sale
//                 ? t('type', 'sale')
//                 : t('type', 'new')
//           }
//           size="small"
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: '232%',
//             backgroundColor: p.hot
//               ? '#F74B81'
//               : p.sale
//                 ? '#67BCEE'
//                 : '#3BB77E',
//             color: '#fff',
//             fontWeight: 500,
//             fontSize: 12,
//             height: 24,
//             width: 70,
//             borderTopLeftRadius: 0,
//             borderBottomLeftRadius: 30,
//             borderTopRightRadius: 20,
//             borderBottomRightRadius: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         />
//       )}
//     </Box>

//     <Card className="rounded-2xl shadow-sm hover:shadow-lg transition w-[13vw]">
//       <CardContent className="space-y-1 p-3">
//         {/* Product image */}
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Image
//             src={p.image}
//             width={170}
//             height={170}
//             alt={p.name}
//             style={{ objectFit: 'contain' }}
//           />
//         </Box>

//         {/* Category */}
//         <Typography variant="caption" color="gray" fontSize={12}>
//           {t('categories', p.category)}
//         </Typography>

//         {/* Name */}
//         <Typography
//           variant="body2"
//           fontWeight={700}
//           sx={{
//             height: 40,
//             overflow: 'hidden',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//             fontSize: 16,
//           }}
//         >
//           {t('product', p.name)}
//         </Typography>

//         {/* Rating */}
//         <Rating
//           value={p.rate}
//           size="small"
//           readOnly
//           sx={{ mt: 0.5 }}
//         />

//         {/* Brand */}
//         <Typography
//           component="span"
//           sx={{
//             fontSize: 16,
//             display: 'block',
//             mt: 0.5,
//           }}
//         >
//           <Box component="span" sx={{ color: '#7E7E7E' }}>
//             {t('type', 'by')}{' '}
//           </Box>

//           <Box
//             component="span"
//             sx={{ color: '#3BB77E', fontWeight: 400 }}
//           >
//             {p.brand}
//           </Box>
//         </Typography>

//         <Stack direction="row" spacing={1}>
//           {/* Price */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Typography
//               variant="h6"
//               fontWeight={600}
//               fontSize={17}
//               sx={{
//                 color: '#3BB77E',
//                 borderBottom: '1.5px solid #3BB77E',
//                 pb: '2px',
//                 lineHeight: 0.6,
//                 display: 'inline-block',
//               }}
//             >
//               ${p.price.toFixed(2)}
//             </Typography>

//             <Typography
//               variant="body2"
//               fontSize={13}
//               sx={{
//                 textDecoration: 'line-through',
//                 color: '#ADADAD',
//               }}
//             >
//               ${p.oldPrice.toFixed(2)}
//             </Typography>
//           </Box>

//           {/* Add button (shadcn/button) */}
//           <Button
//             sx={{
//               minWidth: 10, // ✅ FIX: KHÔNG BỊ ÉP NỮA
//               height: 36,
//               flexShrink: 0, // ✅ FIX: Stack không bóp
//               borderRadius: '12px',
//               color: '#29A56C',
//               border: '1px solid #DEF9EC',
//               backgroundColor: '#DEF9EC',
//               position: 'relative',
//               overflow: 'hidden',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: 1,
//               transition: 'all 0.25s ease',

//               '&:hover': {
//                 backgroundColor: '#DEF9EC',
//               },

//               // ✅ Hover: text mờ dần + trượt nhẹ
//               '&:hover .btn-text': {
//                 opacity: 0,
//                 transform: 'translateX(-6px)',
//               },

//               // ✅ Hover: icon trượt mượt vào giữa
//               '&:hover .btn-icon': {
//                 transform: 'translateX(18px)',
//               },
//             }}
//           >
//             {/* ICON */}
//             <Box
//               className="btn-icon"
//               sx={{
//                 transition: 'all 0.25s ease',
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               <Image
//                 src="/icons/active/cart.svg"
//                 alt="cart"
//                 width={17} // ✅ GIỮ 20 là đẹp nhất
//                 height={17}
//                 style={{
//                   filter:
//                     'brightness(0) saturate(100%) invert(49%) sepia(88%) saturate(367%) hue-rotate(96deg) brightness(92%) contrast(90%)',
//                 }}
//               />
//             </Box>

//             {/* TEXT */}
//             <Box
//               className="btn-text"
//               sx={{
//                 transition: 'all 0.25s ease',
//                 whiteSpace: 'nowrap',
//                 fontSize: 12,
//               }}
//             >
//               {t('product', 'add')}
//             </Box>
//           </Button>
//         </Stack>
//       </CardContent>
//     </Card>
//   </Box>
// </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  Tab,
  Box,
  Rating,
  Chip,
  Grid,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { useTranslate } from '@/hooks/useTranslate';
import { Products } from '@/components/data/Product';

export default function ProductGrid() {
  const { t } = useTranslate();
  const [active, setActive] = useState('all');

  // Lấy danh sách category từ sản phẩm
  const categories = Array.from(new Set(Products.map((p) => p.category)));
  const tabs = ['all', ...categories];

  const filteredProducts =
    active === 'all' ? Products : Products.filter((p) => p.category === active);

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h5" fontWeight={600}>
          {t('product', 'popular')}
        </Typography>

        <Tabs
          value={active}
          onChange={(e, val) => setActive(val)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 13,
              mx: 0.5,
              px: 2,
              borderRadius: 2,
            },
            '& .Mui-selected': {
              color: '#3BB77E',
              backgroundColor: '#E6F7F1',
            },
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: 3,
              backgroundColor: '#3BB77E',
            },
          }}
        >
          {tabs.map((cat) => (
            <Tab
              key={cat}
              value={cat}
              label={
                cat === 'all' ? t('categories', 'all') : t('categories', cat)
              }
            />
          ))}
        </Tabs>
      </Stack>

      <Grid container spacing={1.5} sx={{ mt: 3 }}>
        {filteredProducts.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }} key={p.id}>
            <Box sx={{ position: 'relative' }}>
              <Card className="rounded-2xl shadow-sm hover:shadow-lg transition w-full">
                {/* Discount chip */}
                {Number(p.discount) !== 0 && (
                  <Chip
                    label={`${p.discount}%`}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0, // ✅ SÁT LỀ PHẢI
                      backgroundColor:
                        Number(p.discount) > 0 ? '#3BB77E' : '#F59758',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: 12,
                      height: 24,
                      width: 65,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 0,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 30,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                )}

                {/* Status chip (hot/sale/new) */}
                {(p.hot || p.sale || p.new) && (
                  <Chip
                    label={
                      p.hot
                        ? 'Hot'
                        : p.sale
                          ? t('type', 'sale')
                          : t('type', 'new')
                    }
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0, // ✅ SÁT LỀ PHẢI
                      backgroundColor: p.hot
                        ? '#F74B81'
                        : p.sale
                          ? '#67BCEE'
                          : '#3BB77E',
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: 12,
                      height: 24,
                      width: 70,
                      borderRadius: '0 20px 0 20px', // góc giống style bạn dùng
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                )}
                <CardContent className="space-y-1 p-3">
                  {/* Product image */}
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                      src={p.image}
                      width={170}
                      height={170}
                      alt={p.name}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>

                  {/* Category */}
                  <Typography variant="caption" color="gray" fontSize={12}>
                    {t('categories', p.category)}
                  </Typography>

                  {/* Name */}
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    sx={{
                      height: 40,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      fontSize: 16,
                    }}
                  >
                    {t('product', p.name)}
                  </Typography>

                  {/* Rating */}
                  <Rating
                    value={p.rate}
                    size="small"
                    readOnly
                    sx={{ mt: 0.5 }}
                  />

                  {/* Brand */}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 16,
                      display: 'block',
                      mt: 0.5,
                    }}
                  >
                    <Box component="span" sx={{ color: '#7E7E7E' }}>
                      {t('type', 'by')}{' '}
                    </Box>

                    <Box
                      component="span"
                      sx={{ color: '#3BB77E', fontWeight: 400 }}
                    >
                      {p.brand}
                    </Box>
                  </Typography>

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ mt: 1 }}
                  >
                    {/* Price */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        fontSize={17}
                        sx={{
                          color: '#3BB77E',
                          borderBottom: '1.5px solid #3BB77E',
                          pb: '2px',
                          lineHeight: 0.5,
                          display: 'inline-block',
                          fontSize: 16,
                        }}
                      >
                        ${p.price.toFixed(2)}
                      </Typography>

                      <Typography
                        variant="body2"
                        fontSize={13}
                        sx={{
                          textDecoration: 'line-through',
                          color: '#ADADAD',
                          fontSize: 14,
                        }}
                      >
                        ${p.oldPrice.toFixed(2)}
                      </Typography>
                    </Box>

                    {/* Add button (shadcn/button) */}
                    <Button
                      sx={{
                        minWidth: 5, // ✅ FIX: KHÔNG BỊ ÉP NỮA
                        height: 34,
                        flexShrink: 0, // ✅ FIX: Stack không bóp
                        borderRadius: '12px',
                        color: '#29A56C',
                        border: '1px solid #DEF9EC',
                        backgroundColor: '#DEF9EC',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        transition: 'all 0.25s ease',

                        '&:hover': {
                          backgroundColor: '#DEF9EC',
                        },

                        // ✅ Hover: text mờ dần + trượt nhẹ
                        '&:hover .btn-text': {
                          opacity: 0,
                          transform: 'translateX(-6px)',
                        },

                        // ✅ Hover: icon trượt mượt vào giữa
                        '&:hover .btn-icon': {
                          transform: 'translateX(18px)',
                        },
                      }}
                    >
                      {/* ICON */}
                      <Box
                        className="btn-icon"
                        sx={{
                          transition: 'all 0.25s ease',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src="/icons/active/cart.svg"
                          alt="cart"
                          width={16} // ✅ GIỮ 20 là đẹp nhất
                          height={16}
                          style={{
                            filter:
                              'brightness(0) saturate(100%) invert(49%) sepia(88%) saturate(367%) hue-rotate(96deg) brightness(92%) contrast(90%)',
                          }}
                        />
                      </Box>

                      {/* TEXT */}
                      <Box
                        className="btn-text"
                        sx={{
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap',
                          textTransform: 'capitalize',
                          fontSize: 12,
                        }}
                      >
                        {t('product', 'add')}
                      </Box>
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
