import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Required for static hosting like GH Pages
  basePath: isGithubPages ? '/Find-MyRoomie' : '',
  images: {
    unoptimized: true, // Required for next/image with static export
  },
  // Add webpack configuration for path aliases
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    }
    return config
  }
};

export default nextConfig;