// import {
//   Product,
//   ProductApiResponse,
//   ProductDetailApiResponse,
// } from '@/types/product';
// import axios from 'axios';

// const API_BASE = 'https://arlean-unmammalian-lezlie.ngrok-free.dev/api';

// const NGROK_HEADERS = {
//   headers: {
//     'ngrok-skip-browser-warning': 'true',
//   },
// };

// export const productService = {
//   async getProducts(limit: number = 10, page: number = 1) {
//     const res = await axios.get<ProductApiResponse>(
//       `${API_BASE}/product?limit=${limit}&page=${page}`,
//       NGROK_HEADERS,
//     );
//     return res.data;
//   },

//   //   async getProductDetail(id: number) {
//   //     const res = await axios.get<ProductDetailApiResponse>(
//   //       `${API_BASE}/product-details/${id}`,
//   //       NGROK_HEADERS
//   //     );
//   //     return res.data;
//   //   },
//   // services/productSer.ts
//  getProductById: async (id: number): Promise<ProductDetailApiResponse> => {
//     console.log('Axios GET:', `${API_BASE}/product/${id}`);
//     const res = await axios.get<ProductDetailApiResponse>(
//       `${API_BASE}/product/${id}`,
//       NGROK_HEADERS
//     );
//     return res.data;
//   },
// };

// async getProductBySlug(slug: string): Promise<ProductDetailApiResponse> {
//   const res = await axios.get<ProductDetailApiResponse>(
//     `${API_BASE}/product/slug/${slug}`,
//     NGROK_HEADERS
//   );
//   return res.data;
// },

import {
  ProductApiResponse,
  ProductDetailApiResponse,
} from '@/types/product';
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;


const NGROK_HEADERS = {
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
};

export const productService = {
  async getProducts(limit: number = 10, page: number = 1) {
    const res = await axios.get<ProductApiResponse>(
      `${API_BASE}/product?limit=${limit}&page=${page}`,
      NGROK_HEADERS
    );
    return res.data;
  },

  async getProductById(id: number): Promise<ProductDetailApiResponse> {
    console.log('Axios GET:', `${API_BASE}/product/${id}`);
    const res = await axios.get<ProductDetailApiResponse>(
      `${API_BASE}/product/${id}`,
      NGROK_HEADERS
    );
    return res.data;
  },

  async getProductBySlug(slug: string): Promise<ProductDetailApiResponse> {
    const res = await axios.get<ProductDetailApiResponse>(
      `${API_BASE}/product/slug/${slug}`,
      NGROK_HEADERS
    );
    return res.data;
  },
};
