/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES;

const nextConfig = {
  output: 'export',
  trailingSlash: true, // Required for static hosting like GH Pages
  basePath: isGithubPages ? '/Find-MyRoomie' : '',
  images: {
    unoptimized: true, // Required for next/image with static export
  },
};

module.exports = nextConfig;
