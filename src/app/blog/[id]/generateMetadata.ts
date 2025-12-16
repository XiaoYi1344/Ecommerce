import type { Metadata } from 'next';
import { Blog } from '@/components/data/Blog';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const blog = Blog.find((b) => b.id === params.id);

  if (!blog) {
    return {
      title: 'Blog not found',
    };
  }

  return {
    title: blog.title,
    description: `${blog.category} • ${blog.time}`,
    openGraph: {
      title: blog.title,
      images: [blog.image],
    },
  };
}
