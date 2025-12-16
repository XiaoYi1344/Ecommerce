import {
  MapPin,
  Headphones,
  Mail,
  Clock12,
  LucideIcon,
} from 'lucide-react';

export interface ContactItem {
  label: string;
  inputs: string;
  icon: LucideIcon;
}

export interface MenuItems {
  label: string;
}

export interface Contact {
  main: ContactItem[];
}

export interface Menu {
  title: string;
  info: MenuItems[];
}

export const contactData: Contact = {
  main: [
    {
      label: 'address',
      inputs: '5171 W Campbell Ave, Kent, Utah 53127, United States',
      icon: MapPin,
    },
    {
      label: 'call_us',
      inputs: '(+91)-540-025-124553',
      icon: Headphones,
    },
    {
      label: 'email',
      inputs: 'sale@Nest.com',
      icon: Mail,
    },
    {
      label: 'hours',
      inputs: '10:00 - 18:00, Mon - Sat',
      icon: Clock12,
    },
  ],
};


export const menuData: Menu[] = [
  {
    title: 'company',
    info: [
      { label: 'about_us' },
      { label: 'delivery_information' },
      { label: 'privacy_policy' },
      { label: 'terms_conditions' },
      { label: 'contact_us' },
      { label: 'support_center' },
      { label: 'career' },
    ],
  },
  {
    title: 'account',
    info: [
      { label: 'sign_in' },
      { label: 'view_cart' },
      { label: 'my_wish' },
      { label: 'track' },
      { label: 'help' },
      { label: 'shipping' },
      { label: 'compare' },
    ],
  },
  {
    title: 'corporate',
    info: [
      { label: 'vendor' },
      { label: 'affiliate_program' },
      { label: 'farm_business' },
      { label: 'farm_careers' },
      { label: 'our_suppliers' },
      { label: 'accessibility' },
      { label: 'promotions' },
    ],
  },
  {
    title: 'popular',
    info: [
      { label: 'milk_flavoured' },
      { label: 'butter_margarine' },
      { label: 'eggs_substitutes' },
      { label: 'marmalades' },
      { label: 'sour_cream_dips' },
      { label: 'tea_kombucha' },
      { label: 'cheese' },
    ],
  },
];
