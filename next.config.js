/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.com',
      },
      {
        protocol: 'https',
        hostname: '*.org',
      },
      {
        protocol: 'https',
        hostname: '*.net',
      },
    ],
  },
};

module.exports = nextConfig;
