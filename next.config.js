/** @type {import('next').NextConfig} */
import nodeExternals from "webpack-node-externals";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img.youtube.com", "img.ytimg.com"],
  },
};

module.exports = withBundleAnalyzer({
  webpack(nextConfig) {
    config.externals = [nodeExternals()];
    return config;
  },
});
