/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'codeit-frontend.codeit.com',
      'reactjs.org',
      'assets.vercel.com',
      'tanstack.com',
      'storybook.js.org',
      'testing-library.com',
      'static.cdninstagram.com',
      's.pstatic.net',
      'codeit-images.codeit.com',
    ],
  },
};

module.exports = nextConfig;
