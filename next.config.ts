import type { NextConfig } from 'next'
import path from 'path'

const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES

const nextConfig: NextConfig = {
  output: 'export',                        // ✅ Enables `next export` functionality
  trailingSlash: true,                    // ✅ Required for static file routing
  basePath: isGithubPages ? '/Find-MyRoomie' : '', // ✅ Optional: only for GH Pages under subpath
  images: {
    unoptimized: true                     // ✅ Allows <Image> without next/image optimization
  },
  eslint: {
    ignoreDuringBuilds: true             // ✅ Skip ESLint on production build
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src') // ✅ Allows imports like `@/lib/sanity`
    }
    return config
  }
}

export default nextConfig
