/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com', 
      'alonerd.com',
      'secure.gravatar.com',
      'www.gravatar.com',
      'gravatar.com',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alonerd.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com',
        pathname: '/avatar/**',
      },
    ],
  },
}

module.exports = nextConfig
