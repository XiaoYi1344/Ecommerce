export interface HeaderItem {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    desc: string;
  }[];
}

export interface LocationItem {
  title: string;
  address: string;
  phone: string;
  email: string;
}

export const HeaderSection: HeaderItem[] = [
  {
    title: 'Let us know how we can help you',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
    items: [
      {
        id: '01',
        title: 'Visit Feedback',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      },
      {
        id: '02',
        title: 'Employer Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      },
      {
        id: '03',
        title: 'Billing Inquiries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      },
      {
        id: '04',
        title: 'General Inquiries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      },
    ],
  },
];

export const LocationSection: LocationItem[] = [
  {
    title: 'Office',
    address: '205 North Michigan Avenue, Suite 810 Chicago, 60601, USA',
    phone: '+123 4564 7890',
    email: 'contact@xara.com',
  },
  {
    title: 'Studio',
    address: '205 North Michigan Avenue, Suite 810 Chicago, 60601, USA',
    phone: '+123 4564 7890',
    email: 'contact@xara.com',
  },
  {
    title: 'Shop',
    address: '205 North Michigan Avenue, Suite 810 Chicago, 60601, USA',
    phone: '+123 4564 7890',
    email: 'contact@xara.com',
  },
];
