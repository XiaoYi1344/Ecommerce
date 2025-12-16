'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface CountdownProps {
  startTime?: string;
  endTime?: string;
}

export function Countdown({ startTime, endTime }: CountdownProps) {
  const [state, setState] = useState<'coming' | 'running' | 'expired' | null>(
    null,
  );

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  // --- FIX 1: Đưa hàm lên trước useEffect ---
  const updateCountdown = (diff: number) => {
    setTime({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    });
  };

  useEffect(() => {
    if (!endTime) {
      Promise.resolve().then(() => setState(null)); // ⬅ hợp lệ, không còn warning
      return;
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const start = startTime ? new Date(startTime).getTime() : null;
      const end = new Date(endTime).getTime();

      if (start && now < start) {
        setState('coming');
        updateCountdown(start - now);
        return;
      }

      if (now < end) {
        setState('running');
        updateCountdown(end - now);
        return;
      }

      setState('expired');
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

 if (!state) return null;

// expired state
if (state === 'expired') {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 12,
        left: 12,
        background: '#ffdddd',
        padding: '6px 12px',
        borderRadius: '8px',
      }}
    >
      <Typography sx={{ color: '#d33', fontWeight: 600 }}>Expired</Typography>
    </Box>
  );
}

// coming hoặc running state dùng chung countdown layout
const boxes = [
  { label: 'Days', value: time.days },
  { label: 'Hours', value: time.hours },
  { label: 'Mins', value: time.mins },
  { label: 'Sec', value: time.secs },
];

// màu chữ khác nhau cho coming và running
const textColor = state === 'coming' ? '#b38f00' : '#3BB77E';

return (
  <Box sx={{ position: 'absolute', top: 12, left: 12, zIndex: 20 }}>
    {/* CHIP — nằm hoàn toàn tách khỏi layout, không đẩy countdown */}
    {state === 'coming' && (
      <Box
        sx={{
          position: 'absolute',
          top: -35,
          left: 0,
          background: '#fff3cd',
          color: '#b38f00',
          px: 2,
          py: 0.5,
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: 12,
          pointerEvents: 'none', // ⬅️ không chiếm tác động
        }}
      >
        Coming Soon
      </Box>
    )}

    {/* COUNTDOWN */}
    <Stack direction="row" spacing={1}>
      {boxes.map((box, i) => (
        <Box
          key={i}
          sx={{
            background: '#fff',
            borderRadius: '8px',
            p: '6px 10px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: 48,
          }}
        >
          <Typography sx={{ color: textColor, fontWeight: 700 }}>
            {String(box.value).padStart(2, '0')}
          </Typography>
          <Typography sx={{ color: '#777', fontSize: 11 }}>
            {box.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);


}
