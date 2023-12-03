/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-images.codeit.com",
      "tanstack.com",
      "s.pstatic.net",
      "storybook.js.org",
      "codeit-frontend.codeit.com",
      "assets.vercel.com",
      "reactjs.org",
      "jasonwatmore.com",
      "codeit.kr",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
