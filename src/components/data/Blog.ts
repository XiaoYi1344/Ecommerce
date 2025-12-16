export interface BlogDetailBlock {
  type: 'paragraph' | 'image' | 'quote' | 'heading';
  content: string;
}

export interface BlogItem {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  view: string;
  image: string; // cover image
  detail?: BlogDetailBlock[]; // blog detail content
}

export const Blog: BlogItem[] = [
  {
    id: '1',
    category: 'Side Dish',
    title: 'The Intermediate Guide to Healthy Food',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/breakfast.png',
    detail: [
      {
        type: 'paragraph',
        content:
          'Helping everyone live happier, healthier lives at home through their kitchen. Kitchen is a daily food magazine and well-celebrating life in the kitchen through home cooking and intelligent nutrition.',
      },
      {
        type: 'image',
        content: '/blog/detail/meat.png',
      },
      {
        type: 'paragraph',
        content:
          'This comprehensive guide introduces the fundamentals of healthy food, focusing on balance, seasonal ingredients, and sustainable cooking habits that can be applied every day.',
      },
      {
        type: 'quote',
        content:
          'Integer eu faucibus ligula. In vestibulum sit amet risus nec lacinia.',
      },
      {
        type: 'heading',
        content: 'Why healthy food matters',
      },
      {
        type: 'paragraph',
        content:
          'Healthy eating is not about strict limitations, but about feeling great, having more energy, and improving overall well-being through smarter food choices.',
      },
    ],
  },
  {
    id: '2',
    category: 'Soups and Stews',
    title: 'Summer Quinoa Salad Jars with Lemon Dill',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/piza.png',
  },
  {
    id: '3',
    category: 'Salad',
    title: 'Caprese Chicken with Smashed Potatoes',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/girl.png',
  },
  {
    id: '4',
    category: 'Dessert',
    title: 'Harissa Chickpeas with Whipped Feta',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/salat.png',
  },
  {
    id: '5',
    category: 'Breakfast',
    title: 'Almond Butter Chocolate Chip Zucchini Bars',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/pota.png',
  },
  {
    id: '6',
    category: 'Vegan',
    title: 'Smoky Beans & Greens Tacos with Aji Verde',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/shrip.png',
  },
  {
    id: '7',
    category: 'Gluten Free',
    title: 'Sticky Ginger Rice Bowls with Pickled Veg',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/choco.png',
  },
  {
    id: '8',
    category: 'Side Dish',
    title: 'Creamy Garlic Sun-Dried Tomato Pasta',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/bean.png',
  },
  {
    id: '9',
    category: 'Dairy Free',
    title: 'The Absolute Easiest Spinach and Pizza',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/salat.png',
  },
  {
    id: '10',
    category: 'Salad',
    title: 'Sticky Ginger Rice Bowls with Pickled',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/cake.png',
  },
  {
    id: '11',
    category: 'Soups',
    title: 'The Best Soft Chocolate Chip Cookies',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/breakfast.png',
  },
  {
    id: '12',
    category: 'Vegetarian',
    title: 'Baked Mozzarella Chicken Rolls',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/flour.png',
  },
  {
    id: '13',
    category: 'Dessert',
    title: 'The Best Avocado Egg Salad',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/sofa.png',
  },
  {
    id: '14',
    category: 'Vegetarian',
    title: 'The litigants on the screen are not actors',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/res.png',
  },
  {
    id: '15',
    category: 'Vegetarian',
    title: 'The litigants on the screen are not actors',
    date: '25 April 2022',
    time: '4 min read',
    view: '126k',
    image: '/blog/bread.png',
  },
];
