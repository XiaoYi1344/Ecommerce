export interface CommentItem {
  id: number;
  name: string;
  role?: string;
  avatar: string;
  content: string;
  date: string;
}

export const commentsData: CommentItem[] = [
  {
    id: 1,
    name: 'Sienna Gomez',
    role: 'Author',
    avatar: '/images/avatar-1.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis.',
    date: 'Dec 4, 2024',
  },
  {
    id: 2,
    name: 'Brenna Goyette',
    avatar: '/images/avatar-2.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officiis magni sed, voluptates.',
    date: 'Dec 6, 2024',
  },
  {
    id: 3,
    name: 'Gemma Scott',
    avatar: '/images/avatar-3.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, autem.',
    date: 'Dec 8, 2024',
  },
];
