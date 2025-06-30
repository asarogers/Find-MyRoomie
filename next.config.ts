import type { NextConfig } from 'next'
import path from 'path';

const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES;

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint checks on `next build`
  },
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
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  }
};

export default nextConfig;