'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.25,
});

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // START
    NProgress.start();

    // luôn hiển thị ít nhất 400ms
    timer.current = setTimeout(() => {
      NProgress.done(true);
    }, 400);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname, searchParams]);

  return null;
}
