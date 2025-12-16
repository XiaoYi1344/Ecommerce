import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  const path = params.path.join("/");

  const url =
    "https://arlean-unmammalian-lezlie.ngrok-free.dev/api/file/get-image?file=/" +
    path;

  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": response.headers.get("content-type") || "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
