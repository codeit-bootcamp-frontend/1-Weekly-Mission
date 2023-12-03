/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
      "codeit.kr",
      "jasonwatmore.com",
    ],
  },
};

module.exports = nextConfig;
