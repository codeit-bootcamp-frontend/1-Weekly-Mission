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
};

module.exports = nextConfig;
