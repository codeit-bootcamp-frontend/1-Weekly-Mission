const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "codeit.kr",
      "jasonwatmore.com",
      "s.pstatic.net",
      "static.cdninstagram.com",
      "testing-library.com",
      "storybook.js.org",
      "tanstack.com",
      "assets.vercel.com",
      "reactjs.org",
      "codeit-frontend.codeit.com",
      "codeit-images.codeit.com",
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
