// import { useEffect, useState, useCallback } from "react";
// import { ProductResponseData } from "../types/product";
// import { productService } from "@/services/productSer";

// export const useProducts = (limit = 10, page = 1) => {
//   const [data, setData] = useState<ProductResponseData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await productService.getProducts(limit, page);
//       setData(response.data);
//       setError(null);
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError("Error fetching data");
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [limit, page]); // CHUẨN, KHÔNG WARNING

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]); // KHÔNG WARNING

//   return { data, loading, error, refetch: fetchData };
// };
'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  ProductResponseData,
  Product,
  ProductDetail,
  ProductDetailApiResponse,
} from '@/types/product';
import { productService } from '@/services/productSer';

/* ======================================
   HOOK: LIST PRODUCTS (pagination / load more)
====================================== */
export const useProducts = (limit = 10, page = 1) => {
  const [data, setData] = useState<Product[]>([]);
  const [meta, setMeta] = useState<Omit<ProductResponseData, 'rows'> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await productService.getProducts(limit, page);

        if (!res.status) {
          setError(res.message || 'Failed to fetch products');
          return;
        }

        setMeta({
          page: res.data.page,
          limit: res.data.limit,
          count: res.data.count,
        });

        // ✅ Pagination → LUÔN replace
        setData(res.data.rows);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Fetch error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, page]);

  return { data, meta, loading, error };
};


/* ======================================
   HOOK: PRODUCT DETAIL
====================================== */
// export const useProductDetail = (id: number) => {
//   const [data, setData] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id || isNaN(id)) {
//       setError('Invalid product ID');
//       setLoading(false);
//       return;
//     }

//     const fetchDetail = async () => {
//       try {
//         setLoading(true);
//         const res: ProductDetailApiResponse = await productService.getProductById(id);

//         if (res.status) setData(res.data);
//         else setError(res.message || 'Failed to fetch product');
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Fetch error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetail();
//   }, [id]);

//   return { data, loading, error };
// };

export const useProductDetail = (id: number) => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || isNaN(id)) {
      setError('Invalid product ID');
      setLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res: ProductDetailApiResponse = await productService.getProductById(id);

        if (res.status) {
          // map details để thêm createdAt / updatedAt nếu API không trả
          const productWithTimestamps: Product = {
            ...res.data,
            details: res.data.details.map((d) => ({
              ...d,
              createdAt: d.createdAt || new Date().toISOString(),
              updatedAt: d.updatedAt || new Date().toISOString(),
            })),
          };

          setData(productWithTimestamps);
        } else {
          setError(res.message || 'Failed to fetch product');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Fetch error');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return { data, loading, error };
};

