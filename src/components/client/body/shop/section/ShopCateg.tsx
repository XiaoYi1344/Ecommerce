// 'use client';

// import React, { useState } from 'react';
// import {
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Pagination,
//   Stack,
// } from '@mui/material';
// import { useRouter } from 'next/navigation';
// import { Product, productList } from '@/components/data/Shop';

// interface ProductLayoutProps {
//   viewMode: 'grid' | 'list';
// }

// export default function ProductLayout({ viewMode }: ProductLayoutProps) {
//   const router = useRouter();
//   const products = productList.data.rows as Product[];

//   const [page, setPage] = useState(1);
//   const itemsPerPage = 9;

//   const start = (page - 1) * itemsPerPage;
//   const paginated = products.slice(start, start + itemsPerPage);

//   /* ===================== LIST VIEW ===================== */
//   if (viewMode === 'list') {
//     return (
//       <Box p={2}>
//         <Stack spacing={2}>
//           {paginated.map((item) => (
//             <Card
//               key={item.id}
//               sx={{ display: 'flex', p: 2, cursor: 'pointer' }}
//               onClick={() => router.push(`/shop/${item.id}`)}
//             >
//               <CardMedia
//                 component="img"
//                 image={item.details[0]?.images[0]}
//                 sx={{ width: 140, objectFit: 'contain' }}
//               />

//               <CardContent sx={{ flex: 1 }}>
//                 <Typography fontWeight={600}>{item.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   SKU: {item.sku}
//                 </Typography>
//                 <Typography fontWeight={700} mt={1}>
//                   {Number(item.details[0].price).toLocaleString()}{' '}
//                   {item.details[0].unit}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Stack>

//         <Box display="flex" justifyContent="center" mt={4}>
//           <Pagination
//             count={Math.ceil(products.length / itemsPerPage)}
//             page={page}
//             onChange={(_, v) => setPage(v)}
//           />
//         </Box>
//       </Box>
//     );
//   }

//   /* ===================== GRID VIEW ===================== */
//   return (
//     <Box p={2}>
//       <Grid container spacing={3}>
//         {paginated.map((item) => (
//           <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
//             <Card
//               sx={{ cursor: 'pointer', height: '100%' }}
//               onClick={() => router.push(`/products/${item.id}`)}
//             >
//               <CardMedia
//                 component="img"
//                 height={200}
//                 image={item.details[0]?.images[0]}
//                 sx={{ objectFit: 'contain', p: 2 }}
//               />
//               <CardContent>
//                 <Typography fontWeight={600}>{item.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   SKU: {item.sku}
//                 </Typography>
//                 <Typography fontWeight={700} mt={1}>
//                   {Number(item.details[0].price).toLocaleString()}{' '}
//                   {item.details[0].unit}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Box display="flex" justifyContent="center" mt={4}>
//         <Pagination
//           count={Math.ceil(products.length / itemsPerPage)}
//           page={page}
//           onChange={(_, v) => setPage(v)}
//         />
//       </Box>
//     </Box>
//   );
// }

// 'use client';

// import React from 'react';
// import {
//   Box,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Pagination,
//   Skeleton,
// } from '@mui/material';
// import { useRouter } from 'next/navigation';
// import { Product } from '@/types/product';
// import { useProducts } from '@/hooks/useAPIProduct';

// export default function ProductLayout() {
//   const router = useRouter();

//   const [page, setPage] = React.useState(1);

//   const ITEMS_PER_PAGE = 9;

//   // 👉 gọi API qua hook
//   const {
//     data: products,
//     meta,
//     loading,
//     error,
//     resetToPage1,
//   } = useProducts(ITEMS_PER_PAGE, page);

//   if (error) {
//     return (
//       <Box p={2}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box p={2}>
//       <Grid container spacing={3}>
//         {loading
//           ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
//               <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
//                 <Skeleton variant="rectangular" height={280} />
//               </Grid>
//             ))
//           : products.map((item: Product, index: number) => {
//               // xác định ảnh theo index của sản phẩm
//               // index là vị trí của item trong mảng rows
//               let imageFile = '';

//               if ([2, 3].includes(index)) {
//                 // index 1 và 2 tương ứng sản phẩm 2 và 3
//                 // Luôn lấy ảnh thứ 2 (index 1)
//                 imageFile =
//                   item.details?.[0]?.images?.[0] ||
//                   item.generalImages?.[1] ||
//                   '';
//               } else {
//                 // Logic bình thường cho các sản phẩm khác
//                 imageFile =
//                   item.details?.[0]?.images?.[index + 1] || // detail.images
//                   item.generalImages?.[index + 2] || // fallback generalImages
//                   item.details?.[0]?.images?.[1] || // fallback ảnh đầu tiên detail
//                   item.generalImages?.[0] || // fallback ảnh đầu tiên general
//                   '';
//               }

//               const imageUrl = imageFile
//                 ? `/api/proxy-image?url=${encodeURIComponent(
//                     'https://arlean-unmammalian-lezlie.ngrok-free.dev/api/file/get-image?file=' +
//                       imageFile,
//                   )}`
//                 : '/no-image.png';

//               return (
//                 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
//                   <Card
//                     sx={{ cursor: 'pointer', height: '100%' }}
//                     onClick={() => router.push(`/product/${item.id}`)}
//                   >
//                     {/* IMAGE (copy logic từ grid/list) */}
//                     <CardMedia
//                       component="img"
//                       loading="lazy"
//                       image={imageUrl}
//                       sx={{
//                         height: 200,
//                         objectFit: 'contain',
//                         pt: 2,
//                       }}
//                     />

//                     <CardContent>
//                       <Typography fontWeight={600}>{item.name}</Typography>

//                       <Typography variant="body2" color="text.secondary">
//                         SKU: {item.sku}
//                       </Typography>

//                       {item.details?.[0] && (
//                         <Typography fontWeight={700} mt={1}>
//                           {Number(item.details[0].price).toLocaleString()}{' '}
//                           {item.details[0].unit}
//                         </Typography>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               );
//             })}
//       </Grid>

//       {/* PAGINATION */}
//       {!loading && meta && (
//         <Box display="flex" justifyContent="center" mt={4}>
//           <Pagination
//   count={Math.ceil(meta.count / meta.limit)}
//   page={page}
//   onChange={(_, value) => {
//     setPage(value); // <-- page 2, 3, 4...
//   }}
// />

//         </Box>
//       )}
//     </Box>
//   );
// }

'use client';

import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Skeleton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { useProducts } from '@/hooks/useAPIProduct';

type ViewMode = 'grid' | 'list';

interface ProductLayoutProps {
  viewMode: ViewMode;
}

export default function ProductLayout({ viewMode }: ProductLayoutProps) {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const ITEMS_PER_PAGE = 9;

  const { data: products, meta, loading, error } =
    useProducts(ITEMS_PER_PAGE, page);

  if (error) {
    return (
      <Box p={2}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const gridSize =
    viewMode === 'grid'
      ? { xs: 12, sm: 6, md: 4 }
      : { xs: 12 };

  return (
    <Box p={2}>
      <Grid container spacing={viewMode === 'grid' ? 3 : 2}>
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <Grid key={i} size={gridSize}>
                <Skeleton variant="rectangular" height={200} />
              </Grid>
            ))
          : products.map((item: Product, index: number) => {
              let imageFile = '';

              if ([2, 3].includes(index)) {
                imageFile =
                  item.details?.[0]?.images?.[0] ||
                  item.generalImages?.[1] ||
                  '';
              } else {
                imageFile =
                  item.details?.[0]?.images?.[index + 1] ||
                  item.generalImages?.[index + 2] ||
                  item.details?.[0]?.images?.[1] ||
                  item.generalImages?.[0] ||
                  '';
              }

              const imageUrl = imageFile
                ? `/api/proxy-image?url=${encodeURIComponent(
                    'https://arlean-unmammalian-lezlie.ngrok-free.dev/api/file/get-image?file=' +
                      imageFile
                  )}`
                : '/no-image.png';

              return (
                <Grid key={item.id} size={gridSize}>
                  <Card
                    sx={{
                      display: viewMode === 'list' ? 'flex' : 'block',
                      cursor: 'pointer',
                      height: '100%',
                    }}
                    onClick={() => router.push(`/product/${item.id}`)}
                  >
                    <CardMedia
                      component="img"
                      image={imageUrl}
                      sx={{
                        width: viewMode === 'list' ? 200 : '100%',
                        height: 200,
                        objectFit: 'contain',
                        p: 2,
                      }}
                    />

                    <CardContent>
                      <Typography fontWeight={600}>
                        {item.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        SKU: {item.sku}
                      </Typography>

                      {item.details?.[0] && (
                        <Typography fontWeight={700} mt={1}>
                          {Number(item.details[0].price).toLocaleString()}{' '}
                          {item.details[0].unit}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
      </Grid>

      {!loading && meta && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(meta.count / meta.limit)}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      )}
    </Box>
  );
}
