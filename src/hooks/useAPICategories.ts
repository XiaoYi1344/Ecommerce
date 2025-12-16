import { Category, CategoryResponseData } from './../types/category';
import { categoryService } from './../services/categSer';
import { useEffect, useState, useCallback } from "react";

export const useCategories = (limit = 10, initialPage = 1) => {
  const [page, setPage] = useState(initialPage);
  const [items, setItems] = useState<Category[]>([]);
  const [meta, setMeta] =
    useState<Omit<CategoryResponseData, "rows"> | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await categoryService.getCategories(limit, page);

      const { page: p, limit: l, count } = res.data;

      setMeta({ page: p, limit: l, count });

      // page = 1 thì reset, page > 1 thì append
      setItems((prev) => (page === 1 ? res.data.rows : [...prev, ...res.data.rows]));

      setError(null);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  }, [limit, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => setPage((p) => p + 1);
  const resetToPage1 = () => setPage(1);

  return {
    categories: items,
    meta,
    loading,
    error,
    loadMore,
    resetToPage1,
  };
};
