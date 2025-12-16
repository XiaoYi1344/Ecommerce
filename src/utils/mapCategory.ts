import { Grid } from 'lucide-react';
import { CATEGORY_ICON_MAP } from '@/constants/categoryIcons';

export const getCategoryIcon = (slug?: string) => {
  if (!slug) return Grid;
  return CATEGORY_ICON_MAP[slug] ?? Grid;
};
