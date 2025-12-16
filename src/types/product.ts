// Product detail
export interface ProductDetail {
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
}

// Product item
export interface Product {
  id: number;
  sku: string;
  name: string;
  slug: string;
  description: string;
  generalImages: string[];
  subCategoryId: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  details: ProductDetail[];
}

// Pagination data
export interface ProductResponseData {
  page: number;
  limit: number;
  count: number;
  rows: Product[];
}

// Full API response
export interface ProductApiResponse {
  status: boolean;
  data: ProductResponseData;
  message: string;
}

// Full API response for product detail
export interface ProductDetailApiResponse {
  status: boolean;
  data: Product;
  message: string;
}