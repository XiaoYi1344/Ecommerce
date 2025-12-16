// deals.ts
export interface DealItem {
  id: string;
  name: string; // key để dịch
  image: string;
  price: number;
  oldPrice: number;
  brand: string;

  startTime?: string; // ⬅ giờ bắt đầu (có thể null)
  endTime?: string; // ⬅ giờ kết thúc
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const Deals: DealItem[] = [
  {
    id: 'd1',
    name: 'deal_1',
    image: '/deal/Kale.png',
    price: 12.0,
    oldPrice: 14.0,
    brand: 'Hambger Hel',
    startTime: '2025-01-20T08:00:00', // ⬅ giờ bắt đầu (có thể null)
    endTime: '2025-11-31T23:59:59', // ⬅ giờ kết thúc
  },
  {
    id: 'd2',
    name: 'deal_2',
    image: '/deal/Faver.png',
    price: 15.0,
    oldPrice: 19.0,
    brand: 'Hambger Hel',

    startTime: '2025-01-20T08:00:00', // ⬅ giờ bắt đầu (có thể null)
    endTime: '2025-12-31T23:59:59', // ⬅ giờ kết thúc
  },
  {
    id: 'd3',
    name: 'deal_3',
    image: '/deal/Bean.png',
    price: 11.5,
    oldPrice: 12.8,
    brand: 'Hambger Hel',
    startTime: '2026-01-20T08:00:00', // ⬅ giờ bắt đầu (có thể null)
    endTime: '2026-10-31T23:59:59', // ⬅ giờ kết thúc
  },
  {
    id: 'd4',
    name: 'deal_4',
    image: '/deal/Orance.png',
    price: 9.2,
    oldPrice: 10.5,
    brand: 'Totino’s Pizza',
    startTime: '2025-12-10T08:00:00', // ⬅ giờ bắt đầu (có thể null)
    endTime: '2025-12-31T23:59:59', // ⬅ giờ kết thúc
  },
];

export const Services: ServiceItem[] = [
  {
    id: 's1',
    icon: '/icons/advant/tage.png',
    title: 'service1',
    description: 'des1',
  },
  {
    id: 's2',
    icon: '/icons/advant/delivery.png',
    title: 'service2',
    description: 'des2',
  },
  {
    id: 's3',
    icon: '/icons/advant/deal.png',
    title: 'service3',
    description: 'des3',
  },
  {
    id: 's4',
    icon: '/icons/advant/wide.png',
    title: 'service4',
    description: 'des4',
  },
  {
    id: 's5',
    icon: '/icons/advant/return.png',
    title: 'service5',
    description: 'des5',
  },
];
