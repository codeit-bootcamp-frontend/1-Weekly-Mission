/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
      },
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
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
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.baskinrobbins.co.kr",
      },
      {
        protocol: "https",
        hostname: "akamai.pizzahut.co.kr",
      },
      {
        protocol: "http",
        hostname: "www.istarbucks.co.kr",
      },
      {
        protocol: "http",
        hostname: "www.coffeebeankorea.com",
      },
      {
        protocol: "https",
        hostname: "cdn.goob-ne.com",
      },
      {
        protocol: "https",
        hostname: "resources.jetbrains.com",
      },
      {
        protocol: "https",
        hostname: "react.dev",
      },
      {
        protocol: "http",
        hostname: "www.rust-lang.org",
      },
      {
        protocol: "https",
        hostname: "spring.io",
      },
      {
        protocol: "https",
        hostname: "www.rust-lang.org",
      },
      {
        protocol: "https",
        hostname: "spring.io",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.velog.io",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
      },
    ],
  },
};

module.exports = nextConfig;
