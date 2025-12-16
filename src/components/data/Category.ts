export type CateItem = {
  id: number;
  label: string;         // Tên category chính
  icon: string;          // Icon
  subItems?: string[];   // Danh sách sub-items
};

export const Categories: CateItem[] = [
  { id: 1, label: "baking_material", icon: "baking", subItems: ["flour", "sugar", "yeast", "baking_powder"] },
  { id: 2, label: "bread_juice", icon: "juice", subItems: ["bread", "baguette", "juice_orange", "juice_apple"] },
  { id: 3, label: "clothing_beauty", icon: "clothing", subItems: ["shirts", "pants", "dresses", "makeup", "skincare"] },
  { id: 4, label: "deals_day", icon: "shop", subItems: ["flash_sale", "daily_deal", "bundle_offer"] },
  { id: 5, label: "fresh_fruit", icon: "fruit", subItems: ["apple", "banana", "orange", "mango", "grape"] },
  { id: 6, label: "fresh_seafood", icon: "seafood", subItems: ["shrimp", "fish", "crab", "squid"] },
  { id: 7, label: "milk_dairy", icon: "dairy", subItems: ["milk", "cheese", "butter", "yogurt"] },
  { id: 8, label: "pet_food", icon: "pet", subItems: ["dog_food", "cat_food", "bird_food", "fish_food"] },
  { id: 9, label: "vegetables", icon: "veggi", subItems: ["carrot", "tomato", "lettuce", "broccoli", "cucumber"] },
  { id: 10, label: "wine_drinks", icon: "grocery", subItems: ["red_wine", "white_wine", "beer", "juice"] },
  { id: 11, label: "packaged", icon: "fast_food", subItems: ["noodles", "snacks", "canned_food", "frozen_food"] },
  { id: 12, label: "other", icon: "other", subItems: ["miscellaneous", "gift_items", "stationery"] }
];

export interface MiniCategoryItem {
  id: string;
  label: string; 
  icon?: string;
}

export const MiniCategories: MiniCategoryItem[] = [
  { id: "all", label: "all" },
  { id: "baking", label: "baking_material", icon: "baking" },
  { id: "fresh_fruits", label: "fresh_fruits", icon: "fruit" },
  { id: "milks_dairies", label: "milks_dairies", icon: "dairy" },
  { id: "fresh_seafood", label: "fresh_seafood", icon: "seafood" },
  { id: "vegetables", label: "vegetables", icon: "veggi" },
];