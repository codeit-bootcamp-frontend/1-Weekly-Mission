/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tanstack.com",
      "s.pstatic.net",
      "storybook.js.org",
      "codeit-frontend.codeit.com",
      "assets.vercel.com",
      "reactjs.org",
      "jasonwatmore.com",
      "codeit.kr",
      "testing-library.com",
      "codeit-images.codeit.com",
      "static.cdninstagram.com",
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
