import { productService } from '@/services/productSer';
import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const res = await productService.getProductBySlug(params.slug);

  if (!res.status || !res.data) {
    notFound();
  }

  const product = res.data;

  return (
    <div>
      {product.name}
    </div>
  );
}
