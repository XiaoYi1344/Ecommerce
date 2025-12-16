// app/api/proxy-image/[...path].ts (Next.js App Router)
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 });

  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': response.headers.get('content-type') || 'image/webp',
      'Cache-Control': 'public, max-age=86400', // 1 ngày cache
    },
  });
}
