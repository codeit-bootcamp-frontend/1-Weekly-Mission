/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**/**/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/badges/**",
      },
    ],
  },
};
