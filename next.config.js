/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'apiuifront.local'
      },
      {
        protocol: 'https',
        hostname: 'api.uifront.com'
      },
      {
        hostname: 'tailwindui.com'
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com'
      }
    ]
  }
}

module.exports = nextConfig
