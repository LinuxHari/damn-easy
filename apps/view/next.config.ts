import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/z8mf1mogi/**',
      },
    ],
  },
  transpilePackages: ['@repo/ui'],
};

export default nextConfig;
