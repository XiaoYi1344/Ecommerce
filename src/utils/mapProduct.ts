// utils/mapProduct.ts
import { ProductItem } from '@/components/data/Product';
import { Product, ProductDetail } from '@/types/product'; // đảm bảo import đúng

export function mapProductItemToProduct(item: ProductItem): Product {
  const now = new Date().toISOString(); // timestamp hiện tại

  // map chi tiết sản phẩm
  const detail: ProductDetail = {
    id: 1, // hoặc map từ item.id nếu muốn duy nhất
    secondaryName: item.name,
    type: 'Standard',
    size: 'Default',
    quantity: 100,
    price: item.price.toString(),
    priceSale: '0',
    unit: '$',
    productId: Number(item.id.replace('p', '')) || 0,
    images: [item.image],
    isActive: true,
    createdAt: now,
    updatedAt: now,
  };

  // map sản phẩm chính
  const product: Product = {
    id: Number(item.id.replace('p', '')) || 0,
    sku: item.id.toUpperCase(),
    name: item.name,
    slug: item.name.toLowerCase().replace(/\s+/g, '-'), // tạo slug đơn giản
    description: 'This is a demo product description.',
    generalImages: [item.image],
    subCategoryId: 1, // fake giá trị
    isActive: true,
    createdAt: now,
    updatedAt: now,
    details: [detail],
  };

  return product;
}
