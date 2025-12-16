import { Categories } from "./Category";

// Định nghĩa type
export type NavItem = string;

// Danh sách navbar
export const NavItems: string[] = [
  'about_us',
  'my_account',
  'wishlist',
  'order_tracking',
];

export interface MainNavItem {
  label: string;
  subItems?: string[]; // dropdown items
}

export const MainNavbar: MainNavItem[] = [
  {
    label: 'home',
    subItems: ['home_classic', 'home_shop', 'home_marketplace'],
  },
  {
    label: 'about',
  },
  {
    label: 'shop',
    subItems: Categories.map(cat => cat.label),
  },
  {
    label: 'vendors',
    subItems: ['all_vendors', 'top_vendors', 'new_vendors'],
  },
  {
    label: 'mega_menu',
    subItems: [
      'featured_products',
      'latest_offers',
      'trending_categories',
      'collections',
    ],
  },
  {
    label: 'blog',
    subItems: ['blog_grid', 'blog_list', 'blog_single'],
  },
  {
    label: 'pages',
    subItems: ['faq', 'terms', 'privacy', 'login_register'],
  },
  {
    label: 'contact',
  },
];
