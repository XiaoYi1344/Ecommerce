/** @type {import('next').NextConfig} */
const nextConfig = {
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
//   i18n: {
//     locales: ['en', 'vi'],
//     defaultLocale: 'en',
//   },
  experimental: {
    appDir: true, // bật App Router
  },
};

module.exports = nextConfig;
