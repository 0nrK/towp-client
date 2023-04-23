/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.youtube.com", "img.ytimg.com" ],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
};

module.exports = nextConfig;
