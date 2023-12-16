/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
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
      "codeit-images.codeit.com",
      "testing-library.com",
      "static.cdninstagram.com",
      "ca.slack-edge.com",
    ],
  },
};
module.exports = nextConfig;
