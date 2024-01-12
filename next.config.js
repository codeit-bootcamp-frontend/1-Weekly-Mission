/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
      },
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
      },
      {
        protocol: "https",
        hostname: "jasonwatmore.com",
      },
      {
        protocol: "https",
        hostname: "codeit.kr",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "legacy.reactjs.org",
      },
    ],
  },
};

module.exports = nextConfig;
