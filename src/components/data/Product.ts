// products.ts
export interface ProductItem {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: string;
  category: string;
  brand: string;
  rate: number;
  new?: boolean;
  hot?: boolean;
  sale?: boolean;
}

export const Products: ProductItem[] = [
  {
    id: "p1",
    name: "product_1",
    image: "/product/Dandy.jpg",
    price: 28.85,
    oldPrice: 32.80,
    discount: "13",
    category: "fresh_fruit",
    brand: "NestFood",
    rate: 1,
    hot: true,
  },
  {
    id: "p2",
    name: "product_2",
    image: "/product/Raspberry.jpg",
    price: 52.85,
    oldPrice: 58.00,
    discount: "6",
    category: "bread_juice",
    brand: "NestFood",
    rate: 3,
    sale: true,
  },
  {
    id: "p3",
    name: "product_3",
    image: "/product/VeggiPops.jpg",
    price: 48.85,
    oldPrice: 52.80,
    discount: "8",
    category: "baking_material",
    brand: "Country Crock",
    rate: 1,
    new: true,
  },
  {
    id: "p4",
    name: "product_4",
    image: "/product/BeanNut.jpg",
    price: 17.85,
    oldPrice: 19.80,
    discount: "-14",
    category: "baking_material",
    brand: "Country Crock",
    rate: 1
  },
  {
    id: "p5",
    name: "product_5",
    image: "/product/Conut.jpg",
    price: 23.85,
    oldPrice: 25.80,
    discount: "8",
    category: "fresh_fruit",
    brand: "Country Crock",
    rate: 1
  },
  {
    id: "p6",
    name: "product_6",
    image: "/product/Muffin.jpg",
    price: 54.85,
    oldPrice: 55.80,
    discount: "2",
    category: "fresh_fruit",
    brand: "Country Crock",
    rate: 0
  },
  {
    id: "p7",
    name: "product_7",
    image: "/product/Pukka.jpg",
    price: 22.85,
    oldPrice: 24.80,
    discount: "8",
    category: "baking_material",
    brand: "Hambger Hel",
    rate: 0, 
    hot: true,
  },
  {
    id: "p8",
    name: "product_8",
    image: "/product/Cofe.jpg",
    price: 23.85,
    oldPrice: 25.80,
    discount: "8",
    category: "fresh_seafood",
    brand: "Hambger Hel",
    rate: 0
  },
  {
    id: "p9",
    name: "product_9",
    image: "/product/Yuja.jpg",
    price: 35.85,
    oldPrice: 37.80,
    discount: "6",
    category: "clothing_beauty",
    brand: "Hambger Hel",
    rate: 0
  },
  {
    id: "p10",
    name: "product_10",
    image: "/product/Pistachio.jpg",
    price: 32.85,
    oldPrice: 33.80,
    discount: "3",
    category: "baking_material",
    brand: "Hambger Hel",
    rate: 1
  },
  {
    id: "p11",
    name: "product_11",
    image: "/product/Reishi.jpg",
    price: 58.00,
    oldPrice: 60.00,
    discount: "4",
    category: "baking_material",
    brand: "Totino’s Pizza",
    rate: 1
  },
  {
    id: "p12",
    name: "product_12",
    image: "/product/Moringa.jpg",
    price: 71.00,
    oldPrice: 75.00,
    discount: "6",
    category: "baking_material",
    brand: "Totino’s Pizza",
    rate: 1
  },
  {
    id: "p13",
    name: "product_13",
    image: "/product/Juice.jpg",
    price: 78.00,
    oldPrice: 90.00,
    discount: "21",
    category: "fresh_fruit",
    brand: "Maruchan Ramen",
    rate: 0
  },
  {
    id: "p14",
    name: "product_14",
    image: "/product/LowFat.jpg",
    price: 79.00,
    oldPrice: 90.00,
    discount: "21",
    category: "bread_juice",
    brand: "Maruchan Ramen",
    rate: 0
  },
  {
    id: "p15",
    name: "product_15",
    image: "/product/Talenti.jpg",
    price: 56.00,
    oldPrice: 72.00,
    discount: "27",
    category: "baking_material",
    brand: "USA Noodle Soup",
    rate: 0
  }
];
