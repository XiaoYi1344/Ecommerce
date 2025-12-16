import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arlean-unmammalian-lezlie.ngrok-free.dev',
        pathname: '/api/file/get-image',
      },
    ],
  },
};

export default nextConfig;
