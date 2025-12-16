import {
  ChefHat,
  Candy,
  Droplet,
  Package,
  Coffee,
  RectangleHorizontal,
  Wine,
  Leaf,
  Wheat,
  FlaskConical,
  Popcorn,
  ShoppingCart,
} from 'lucide-react';

export const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  baking: ChefHat,
  'baking-flour-mixes': ChefHat,

  'chocolate-candy': Candy,

  'honey-sweeteners': Droplet,

  'packaged-foods': Package,

  'tea-beverages': Coffee,

  bars: RectangleHorizontal,

  'condiments-sauces-spreads': Wine,

  'herbs-spices': Leaf,

  // ❌ Bowl → ✅ Wheat
  'cereals-breakfast-foods': Wheat,

  'oils-vinegar': FlaskConical,

  snacks: Popcorn,

  all: ShoppingCart,
};
