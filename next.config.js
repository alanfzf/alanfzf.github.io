/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
