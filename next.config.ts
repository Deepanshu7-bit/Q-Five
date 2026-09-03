import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qfive.in",
      },
      {
        protocol: "https",
        hostname: "www.qfive.in",
      },
    ],
  },
};

export default nextConfig;
