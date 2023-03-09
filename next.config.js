/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: require('./next-i18next.config').i18n,
  env: {
    API_URL: 'https://api.uzbtrip.com/api/v1'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'svg-url-loader',
    });
    return config;
  }
}

module.exports = nextConfig;