import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  
  trailingSlash: true,
  distDir: 'out',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

 
};

export default nextConfig;
