/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com", //host주소
        port: "",
        pathname: "/account123/**", // 우리 사이트의 공통 path, **은 하위 모든 경로를 의미함
      },
    ],
  },
};

module.exports = nextConfig;
