const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  serverRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },
  env: {
    BUILD_ENV: process.env.BUILD_ENV,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};

module.exports = nextConfig;
