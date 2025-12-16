import axios from "axios";
import { CategoryApiResponse } from "@/types/category";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;


const NGROK_HEADERS = {
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
};

export const categoryService = {
  async getCategories(limit = 10, page = 1): Promise<CategoryApiResponse> {
    const res = await axios.get<CategoryApiResponse>(
      `${API_BASE}/category?limit=${limit}&page=${page}`,
      NGROK_HEADERS
    );
    return res.data;
  },
};
