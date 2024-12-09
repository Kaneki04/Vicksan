import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/Vicksan',
  trailingSlash: true,  
  distDir: 'out', 
  
  typescript: {
    ignoreBuildErrors: true, 
    
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore linting errors during build
  },
};

export default nextConfig;
