// Static export for GitHub Pages: redirects and custom headers are not supported
// by the host, so they are intentionally absent here.
const nextConfig = {
  output: 'export',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
