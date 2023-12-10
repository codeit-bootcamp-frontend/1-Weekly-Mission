/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
    {
      protocol: "https",
      hostname: "tanstack.com",
      port: "",
      pathname: "/build/_assets/**",
    },
    {
      protocol: "https",
      hostname: "s.pstatic.net",
      port: "",
      pathname: "/static/www/mobile/edit/**",
    },
    {
      protocol: "https",
      hostname: "storybook.js.org",
      port: "",
      pathname: "/images/social/**",
    },
    {
      protocol: "https",
      hostname: "codeit-frontend.codeit.com",
      port: "",
      pathname: "/static/images/brand/**",
    },
    {
      protocol: "https",
      hostname: "assets.vercel.com",
      port: "",
      pathname: "/image/upload/front/nextjs/**",
    },
    {
      protocol: "https",
      hostname: "reactjs.org",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "jasonwatmore.com",
      port: "",
      pathname: "/_content/images/**",
    },
    {
      protocol: "https",
      hostname: "codeit.kr",
      port: "",
      pathname: "/static/images/brand/**",
    },
  ],
  },
  webpack: (config) => {
    // 기존 URL 파일로더 규칙을 가져옵니다.
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        // 후에 설명할 리소스 쿼리입니다.
        resourceQuery: { not: /components/ },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /components/,
        use: ["@svgr/webpack"],
      }
    );
    return config;
  }
}

module.exports = nextConfig
