/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'codeit.kr',
      'jasonwatmore.com',
      's.pstatic.net',
      'static.cdninstagram.com',
      'testing-library.com',
      'storybook.js.org',
      'tanstack.com',
      'assets.vercel.com',
      'reactjs.org',
      'codeit-frontend.codeit.com',
      'codeit-images.codeit.com',
      'codeit-front.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  webpack: (config) => {
    // 기존 URL 파일로더 규칙을 가져옵니다.
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
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
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
};

module.exports = nextConfig;
