/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.youtube.com", "img.ytimg.com" ],
  },
};

module.exports = nextConfig;
