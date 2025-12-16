export interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategories: SubCategory[];
}

export interface CategoryResponseData {
  page: number;
  limit: number;
  count: number;
  rows: Category[];
}

export interface CategoryApiResponse {
  status: boolean;
  data: CategoryResponseData;
  message: string;
}
