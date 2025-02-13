import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shorturl.at',
        pathname: '/**', // This will allow any path from the shorturl.at domain
      },
      {
        protocol: 'https',
        hostname: 'yandex.com',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;