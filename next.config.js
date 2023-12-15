/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "s.pstatic.net",
      "codeit.kr",
      "jasonwatmore.com",
      "ca.slack-edge.com",
      "yt3.googleusercontent.com",
      "github.com",
      "legacy.reactjs.org",
      "velog.velcdn.com",
      "avatars.githubusercontent.com",
      "i1.daumcdn.net",
      "react.dev",
    ],
  },
};

module.exports = nextConfig;
