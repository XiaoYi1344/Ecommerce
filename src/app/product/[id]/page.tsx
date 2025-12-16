// 'use client';

// import ProductDetail from "@/components/client/body/shop/ShopDetail";
// import { useEffect, useState } from "react";

// export default function ProductPage({ params }) {
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     fetch(`/api/products/${params.id}`)
//       .then(res => res.json())
//       .then(setProduct);
//   }, [params.id]);

//   return <ProductDetail product={product} />;
// }
// pages/product/[id].tsx
'use client';

import { useParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import ProductDetail from '@/components/client/body/shop/section/ShopDetail';
import { useProductDetail } from '@/hooks/useAPIProduct';

// export default function ProductPage() {
//   const { id } = useParams<{ id: string }>();
//   const productId = Number(id);

//   const { data: product, loading, error } = useProductDetail(productId);

//   if (loading) {
//     return (
//       <Box p={3}>
//         <Typography>Loading...</Typography>
//       </Box>
//     );
//   }

//   if (error || !product) {
//     return (
//       <Box p={3}>
//         <Typography color="error">{error || 'Product not found'}</Typography>
//       </Box>
//     );
//   }

//   return <ProductDetail product={product} />;
// }

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data: product, loading, error } = useProductDetail(productId);

  if (loading) return <Typography>Loading...</Typography>;
  if (error || !product) return <Typography>Error</Typography>;

  return <ProductDetail product={product} />;
}
