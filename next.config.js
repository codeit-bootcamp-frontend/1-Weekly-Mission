/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "codeit-images.codeit.com",
                port: "",
                pathname: "/badges/**",
            },
        ],
    },
};
