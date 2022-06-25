/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/academy/",
  basePath: "/academy",
  reactStrictMode: true,
  images: {
    domains: ["imagedelivery.net"],
  },
};

module.exports = nextConfig;
