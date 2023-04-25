/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.youtube.com", "img.ytimg.com"],
  },
  env: {
    LOCAL_API_URL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
  },
};

module.exports = nextConfig;
