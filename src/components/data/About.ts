export interface HeroItem {
  bigImage: string;
  title: string;
  paragraphs: string[];
  thumbs: string[];
}

export interface ItemJuner {
  id: string;
  title: string;
  body: string;
  icon: string;
}

export interface ServiceItem {
  title: string;
  items: ItemJuner[];
}

export interface ParnerItem {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ColJuner {
  title: string;
  text: string;
}

export interface CategItem {
  cols: ColJuner[];
}

// Hero Section
export const HeroSection: HeroItem[] = [
  {
    bigImage: '/about/person.png',
    title: 'Welcome to Nest',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.',
      'Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.',
    ],
    thumbs: ['/about/dersert.png', '/about/green.png', '/about/fancy.png'],
  },
];

// Service Section
export const ServiceSection: ServiceItem[] = [
  {
    title: 'What We Provide?',
    items: [
      {
        id: 'best-prices',
        title: 'Best Prices & Offers',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/tage.png',
      },
      {
        id: 'wide-assortment',
        title: 'Wide Assortment',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/delivery.png',
      },
      {
        id: 'free-delivery',
        title: 'Free Delivery',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/deal.png',
      },
      {
        id: 'easy-returns',
        title: 'Easy Returns',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/wide.png',
      },
      {
        id: 'satisfaction',
        title: '100% Satisfaction',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/return.png',
      },
      {
        id: 'daily-deal',
        title: 'Great Daily Deal',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: '/icons/advant/daily.png',
      },
    ],
  },
];

// Partner Section
export const PartnerSection: ParnerItem[] = [
  {
    eyebrow: 'Our performance',
    title: 'Your Partner for e-commerce grocery solution',
    paragraphs: [
      'Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
      'Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia',
    ],
    images: ['/about/group.png'],
  },
];

// Category Info Section
export const CateInfoSection: CategItem[] = [
  {
    cols: [
      {
        title: 'Who we are',
        text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.',
      },
      {
        title: 'Our history',
        text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.',
      },
      {
        title: 'Our mission',
        text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.',
      },
    ],
  },
];


export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export const teamIntro = {
  sectionTitle: "Our Team",
  heading: "Meet Our Expert Team",
  paragraphs: [
    "Proin ullamcorper pretium orci. Donec necsce leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
    "Proin ullamcorper pretium orci. Donec necsce leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
  ],
  buttonText: "View All Members"
};

export const teamMembers: TeamMember[] = [
  {
    name: "H. Merinda",
    role: "CEO & Co-Founder",
    image: "/about/expert1.png",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Dilan Specter",
    role: "Head Engineer",
    image: "/about/expert2.png",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  }
];

export const statsData = [
  { id: 1, value: '0+', label: 'Glorious years' },
  { id: 2, value: '0+', label: 'Happy clients' },
  { id: 3, value: '0+', label: 'Projects complete' },
  { id: 4, value: '0+', label: 'Team advisor' },
  { id: 5, value: '0+', label: 'Products Sale' },

];
