/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages();

const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
