const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // If deploying to GitHub Pages with a repository name like "gmt"
  assetPrefix: isProd ? '/gmt/' : '',
  basePath: isProd ? '/gmt' : '',

  images: {
    // Required for static HTML export to avoid issues with Next.js image optimization
    unoptimized: true,
  },

  trailingSlash: true, // Ensures trailing slashes for all paths, improving compatibility
  output: 'export', // Configures Next.js for static site export
};
