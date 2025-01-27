const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/gmt/' : '',
  basePath: isProd ? '/gmt' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true, // Enable ES Module compatibility
  },
};
