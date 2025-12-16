// 'use client';

// import React, { useMemo, useState } from 'react';
// import Image from 'next/image';
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   IconButton,
//   Chip,
//   Stack,
//   Tabs,
//   Tab,
//   Paper,
//   Divider,
//   TextField,
//   Rating,
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShareIcon from '@mui/icons-material/Share';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { Product } from '@/components/data/Shop';

// interface Props {
//   product: Product;
// }

// export default function ProductDetail({ product }: Props) {
//   const details = product.details;
//   const [detailIndex, setDetailIndex] = useState(0);
//   const [imgIndex, setImgIndex] = useState(0);
//   const [qty, setQty] = useState(1);

//   const detail = useMemo(() => details[detailIndex], [details, detailIndex]);

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//       <Grid container spacing={4}>
//         {/* LEFT – IMAGE */}
//         <Grid size={{ xs: 12, md: 5 }}>
//           <Paper variant="outlined" sx={{ p: 2 }}>
//             <Box sx={{ position: 'relative', pt: '100%' }}>
//               <Image
//                 src={detail.images[imgIndex]}
//                 alt={product.name}
//                 fill
//                 style={{ objectFit: 'contain' }}
//               />
//             </Box>

//             <Stack direction="row" spacing={1} mt={2}>
//               {detail.images.map((img, i) => (
//                 <Box
//                   key={i}
//                   onClick={() => setImgIndex(i)}
//                   sx={{
//                     width: 64,
//                     height: 64,
//                     border: i === imgIndex ? '2px solid #1976d2' : '1px solid #ddd',
//                     cursor: 'pointer',
//                     position: 'relative',
//                   }}
//                 >
//                   <Image src={img} alt="" fill style={{ objectFit: 'contain' }} />
//                 </Box>
//               ))}
//             </Stack>
//           </Paper>
//         </Grid>

//         {/* RIGHT – INFO */}
//         <Grid size={{ xs: 12, md: 7 }}>
//           <Typography variant="h5" fontWeight={700}>
//             {product.name}
//           </Typography>

//           <Stack direction="row" spacing={1} alignItems="center" mt={1}>
//             <Rating value={4.5} precision={0.5} readOnly size="small" />
//             <Typography variant="body2" color="primary">
//               4.5 (1,234 reviews)
//             </Typography>
//           </Stack>

//           <Typography variant="h4" color="error" mt={2}>
//             {Number(detail.price).toLocaleString()} {detail.unit}
//           </Typography>

//           <Typography color="text.secondary" mt={0.5}>
//             SKU: {product.sku}
//           </Typography>

//           <Stack direction="row" spacing={1} alignItems="center" mt={1}>
//             <CheckCircleIcon color="success" fontSize="small" />
//             <Typography variant="body2">In stock ({detail.quantity})</Typography>
//           </Stack>

//           <Divider sx={{ my: 2 }} />

//           {/* DETAIL TABS (VARIANTS) */}
//           <Typography fontWeight={600} mb={1}>
//             Available options
//           </Typography>
//           <Tabs
//             value={detailIndex}
//             onChange={(_, v) => {
//               setDetailIndex(v);
//               setImgIndex(0);
//             }}
//             variant="scrollable"
//           >
//             {details.map((d, i) => (
//               <Tab
//                 key={d.id}
//                 label={`${d.type} • ${d.size}`}
//                 sx={{ alignItems: 'flex-start' }}
//               />
//             ))}
//           </Tabs>

//           <Divider sx={{ my: 2 }} />

//           {/* QUANTITY + ACTION */}
//           <Stack direction="row" spacing={2} alignItems="center">
//             <IconButton onClick={() => setQty(Math.max(1, qty - 1))}>
//               <RemoveIcon />
//             </IconButton>
//             <TextField
//               size="small"
//               value={qty}
//               inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
//               sx={{ width: 70 }}
//             />
//             <IconButton onClick={() => setQty(qty + 1)}>
//               <AddIcon />
//             </IconButton>

//             <Button variant="contained" size="large">
//               Add to cart
//             </Button>
//           </Stack>

//           <Stack direction="row" spacing={1} mt={2}>
//             <Button startIcon={<FavoriteBorderIcon />} variant="outlined">
//               Wishlist
//             </Button>
//             <Button startIcon={<ShareIcon />} variant="outlined">
//               Share
//             </Button>
//           </Stack>
//         </Grid>
//       </Grid>

//       {/* BOTTOM – DESCRIPTION */}
//       <Divider sx={{ my: 4 }} />

//       <Typography variant="h6" fontWeight={700} mb={1}>
//         Product Description
//       </Typography>
//       <Typography color="text.secondary">{product.description}</Typography>
//     </Box>
//   );
// }
'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Stack,
  Tabs,
  Tab,
  Paper,
  Divider,
  TextField,
  Rating,
  CircularProgress,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useProductDetail } from '@/hooks/useAPIProduct';
import { Product, ProductDetail as ProductDetailType } from '@/types/product';
import { ProductOverview } from './descripStyle';
import { GitCompareArrowsIcon, ShoppingCartIcon } from 'lucide-react';
import { calculateDiscount } from '@/utils/price';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const params = useParams();
  const id = Number(params?.id);
  const { data: fetchedProduct, loading, error } = useProductDetail(id);

  const [detailIndex, setDetailIndex] = useState(0);
  const [qty, setQty] = useState(1);

  // Parse product description and extract structured data
  const currentProduct = useMemo(() => {
    if (!fetchedProduct) return null;

    const p: Product = fetchedProduct;

    const desc = p.description || '';
    const parts = desc.split('\n\n');
    const descriptionLines = parts[0]?.split('\n') || [];
    const characterLine = parts.find((p) => p.startsWith('Character:')) || '';
    const fromCacaoLine = parts.find((p) => p.startsWith('From cacao')) || '';
    const otherIngredientsLine =
      parts.find((p) => p.startsWith('Other ingredients:')) || '';
    const warningsLine = parts.find((p) => p.startsWith('Warnings:')) || '';
    const supplementFactsLine =
      parts.find((p) => p.startsWith('Supplement Facts')) || '';
    const disclaimerLine = parts.find((p) => p.startsWith('Disclaimer:')) || '';

    const otherIngredients = otherIngredientsLine
      ? otherIngredientsLine
          .replace('Other ingredients:', '')
          .split(',')
          .map((i) => i.trim())
      : [];

    const warnings = warningsLine
      ? warningsLine
          .replace('Warnings:', '')
          .split('\n')
          .map((i) => i.trim())
      : [];

    const nutrients: { name: string; amount: string; dailyValue?: string }[] =
      [];
    if (supplementFactsLine) {
      const lines = supplementFactsLine.split('\n').slice(1);
      lines.forEach((line) => {
        const match = line.match(/^(.+?)\s+([\d<\.]+.*?)(?:\s+\((.+)\))?$/);
        if (match)
          nutrients.push({
            name: match[1],
            amount: match[2],
            dailyValue: match[3],
          });
      });
    }

    return {
      ...p,
      description: [...descriptionLines, characterLine, fromCacaoLine].filter(
        Boolean,
      ),
      otherIngredients,
      warnings,
      supplementFacts: nutrients.length > 0 ? { nutrients } : undefined,
      disclaimer: disclaimerLine
        ? disclaimerLine.replace('Disclaimer:', '').trim()
        : undefined,
      suggestedUse: [], // thêm nếu có dữ liệu
    };
  }, [fetchedProduct]);

  const details = currentProduct?.details || [];
  const detail: ProductDetailType | undefined = details[detailIndex];

  const thumbnailImages = useMemo(
    () => [...(detail?.images || []), ...(currentProduct?.generalImages || [])],
    [detail, currentProduct],
  );

  const getDefaultImgIndex = (productIndex: number, thumbnails: string[]) => {
    if (!thumbnails.length) return 0;
    if (productIndex === 1) return thumbnails.length >= 4 ? 3 : 0;
    if (productIndex === 2 || productIndex === 3) return 0;
    return thumbnails.length >= 2 ? 1 : 0;
  };

  const defaultImgIndex = useMemo(
    () => getDefaultImgIndex(0, thumbnailImages),
    [thumbnailImages],
  );
  const [imgIndex, setImgIndex] = useState(defaultImgIndex);
  const safeImgIndex = Math.min(
    Math.max(0, imgIndex),
    thumbnailImages.length - 1,
  );

  const discount = calculateDiscount(
  detail?.price ?? 0,
  detail?.priceSale ?? 0
);


  const getImageUrl = (file: string) =>
    `/api/proxy-image?url=${encodeURIComponent(
      'https://arlean-unmammalian-lezlie.ngrok-free.dev/api/file/get-image?file=' +
        file,
    )}`;

  const mainImageUrl = thumbnailImages[safeImgIndex]
    ? getImageUrl(thumbnailImages[safeImgIndex])
    : '/no-image.png';

  if (loading)
    return (
      <Box
        minHeight={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );

  if (error || !currentProduct || !detail)
    return (
      <Box p={3}>
        <Typography color="error">{error || 'Product not found'}</Typography>
      </Box>
    );

  return (
    <Box sx={{ mx: 'auto', p: 3 }}>
      <Grid container spacing={4}>
        {/* IMAGE */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Box sx={{ position: 'relative' }}>
              <Image
                src={mainImageUrl}
                alt={currentProduct.name}
                width={500}
                height={500}
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </Box>
            <Stack direction="row" spacing={1} mt={2}>
              {thumbnailImages.map((img, i) => (
                <Box
                  key={i}
                  onClick={() => setImgIndex(i)}
                  sx={{
                    width: 64,
                    height: 64,
                    border:
                      i === safeImgIndex
                        ? '2px solid #1976d2'
                        : '1px solid #ddd',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={getImageUrl(img)}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* INFO */}
        <Grid size={{ xs: 12, md: 7 }}>
          {/* SALE BADGE */}
          {discount > 0 && (
            <Chip label="Sale Off" color="error" size="small" sx={{ mb: 1 }} />
          )}

          {/* TITLE */}
          <Typography variant="h5" fontWeight={700}>
            {currentProduct.name}
          </Typography>

          {/* RATING */}
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <Rating value={4.5} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              (32 reviews)
            </Typography>
          </Stack>

          {/* PRICE */}
          <Stack direction="row" spacing={1} alignItems="baseline" mt={2}>
            <Typography variant="h4" color="success.main" fontWeight={700}>
              {Number(detail.price).toLocaleString()} {detail.unit}
            </Typography>

            {/* export interface ProductDetail {
  id: number;
  secondaryName: string;
  type: string;
  size: string;
  quantity: number;
  price: string;
  priceSale: string;
  unit: string;
  productId: number;
  images: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} */}

            {detail.price && (
              <Typography
                variant="body1"
                sx={{ textDecoration: 'line-through', color: 'text.disabled' }}
              >
                {Number(detail.price).toLocaleString()} {detail.unit}
              </Typography>
            )}

            {discount > 0 && (
              <Chip
                label={`${discount}% Off`}
                size="small"
                color="warning"
              />
            )}
          </Stack>

          {/* DESCRIPTION
  <Typography color="text.secondary" mt={1.5}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
    officia, corrupti reiciendis minima nisi modi, quasi.
  </Typography> */}

          {/* SIZE / WEIGHT */}
          <Typography fontWeight={600} mt={3} mb={1}>
            Size / Weight
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {details.map((d, i) => (
              <Chip
                key={d.id}
                label={d.size}
                clickable
                color={i === detailIndex ? 'success' : 'default'}
                variant={i === detailIndex ? 'filled' : 'outlined'}
                onClick={() => setDetailIndex(i)}
              />
            ))}
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* STOCK */}
          <Stack direction="row" spacing={1} alignItems="center">
            <CheckCircleIcon color="success" fontSize="small" />
            <Typography variant="body2">
              {detail.quantity} Items In Stock
            </Typography>
          </Stack>

          {/* QUANTITY + ACTION */}
          <Stack direction="row" spacing={2} alignItems="center" mt={3}>
            <IconButton onClick={() => setQty(Math.max(1, qty - 1))}>
              <RemoveIcon />
            </IconButton>

            <TextField
              size="small"
              type="number"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              inputProps={{ min: 1, style: { textAlign: 'center' } }}
              sx={{ width: 70 }}
            />

            <IconButton onClick={() => setQty(qty + 1)}>
              <AddIcon />
            </IconButton>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{ px: 4 }}
            >
              Add to cart
            </Button>
          </Stack>

          {/* EXTRA ACTIONS */}
          <Stack direction="row" spacing={1} mt={2}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <GitCompareArrowsIcon />
            </IconButton>
          </Stack>

          {/* META INFO */}
          <Stack spacing={0.5} mt={3} color="text.secondary">
            <Typography variant="body2">
              Type:{' '}
              <Box component="span" color="success.main">
                Organic
              </Box>
            </Typography>
            <Typography variant="body2">SKU: {currentProduct.sku}</Typography>
            <Typography variant="body2">MFG: Jun 4, 2022</Typography>
            <Typography variant="body2">LIFE: 70 days</Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* DESCRIPTION */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" fontWeight={700} mb={1}>
        Product Description
      </Typography>
      <Box>
        <ProductOverview
          description={currentProduct.description || []}
          suggestedUse={currentProduct.suggestedUse || []}
          otherIngredients={currentProduct.otherIngredients || []}
          warnings={currentProduct.warnings || []}
          supplementFacts={currentProduct.supplementFacts}
          disclaimer={currentProduct.disclaimer}
          // manufacturerUrl={currentProduct.manufacturerUrl}
        />
      </Box>
    </Box>
  );
}
