

// =======================
// BlogDetail.tsx
// =======================

'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { Blog } from '@/components/data/Blog';

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id as string;

  const blog = Blog.find((item) => item.id === id);

  if (!blog) {
    return (
      <Typography textAlign="center" mt={10}>
        Blog not found
      </Typography>
    );
  }

  return (
    <Box maxWidth="900px" mx="auto" px={2} py={6}>
      {/* Header */}
      <Stack spacing={2} mb={4}>
        <Chip
          label={blog.category}
          sx={{ width: 'fit-content', background: '#3bb77e', color: '#fff' }}
        />
        <Typography variant="h4" fontWeight={700}>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.date} • {blog.time} • {blog.view} views
        </Typography>
      </Stack>

      {/* Cover image */}
      <Box mb={4} borderRadius={3} overflow="hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={480}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>

      {/* Detail content */}
      <Stack spacing={3}>
        {/* {blog.detail?.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <Typography key={index} variant="h5" fontWeight={600}>
                  {block.content}
                </Typography>
              );

            case 'quote':
              return (
                <Box
                  key={index}
                  sx={{
                    borderLeft: '4px solid #3bb77e',
                    pl: 2,
                    color: 'text.secondary',
                    fontStyle: 'italic',
                  }}
                >
                  {block.content}
                </Box>
              );

            case 'image':
              return (
                <Box key={index} borderRadius={3} overflow="hidden">
                  <Image
                    src={block.content}
                    alt="blog detail image"
                    width={900}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
              );

            default:
              return (
                <Typography key={index} lineHeight={1.8}>
                  {block.content}
                </Typography>
              );
          }
        })} */}
              {/* Detail content */}
      {!blog.detail || blog.detail.length === 0 ? (
        <Typography color="text.secondary" lineHeight={1.8}>
          Nội dung bài viết đang được cập nhật. Vui lòng quay lại sau.
        </Typography>
      ) : (
        <Stack spacing={3}>
          {blog.detail.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <Typography key={index} variant="h5" fontWeight={600}>
                    {block.content}
                  </Typography>
                );

              case 'quote':
                return (
                  <Box
                    key={index}
                    sx={{
                      borderLeft: '4px solid #3bb77e',
                      pl: 2,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                    }}
                  >
                    {block.content}
                  </Box>
                );

              case 'image':
                return (
                  <Box key={index} borderRadius={3} overflow="hidden">
                    <Image
                      src={block.content}
                      alt="blog detail image"
                      width={900}
                      height={500}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                );

              default:
                return (
                  <Typography key={index} lineHeight={1.8}>
                    {block.content}
                  </Typography>
                );
            }
          })}
        </Stack>
      )}

      </Stack>
    </Box>
  );
}
