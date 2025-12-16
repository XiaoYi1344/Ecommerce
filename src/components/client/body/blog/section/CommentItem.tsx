'use client';

import { Avatar, Box, Stack, Typography, Chip } from '@mui/material';
import { CommentItem as CommentType } from '@/components/data/comments';

interface Props {
  data: CommentType;
}

export function CommentItem({ data }: Props) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Avatar
        src={data.avatar}
        alt={data.name}
        sx={{ width: 48, height: 48 }}
      />

      <Box flex={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontWeight={600}>{data.name}</Typography>

          {data.role && (
            <Chip
              label={data.role}
              size="small"
              color="success"
              sx={{ height: 20 }}
            />
          )}
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5, lineHeight: 1.6 }}
        >
          {data.content}
        </Typography>

        <Typography
          variant="caption"
          color="text.disabled"
          sx={{ mt: 0.5, display: 'block' }}
        >
          {data.date}
        </Typography>
      </Box>
    </Stack>
  );
}
