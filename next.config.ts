import { withContentlayer } from "next-contentlayer";
import type { Configuration } from "webpack";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    cssChunking: true,
    optimizeCss: true,
    appDocumentPreloading: true,
  },
  poweredByHeader: false,
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
} satisfies Partial<NextConfig>;

export default withContentlayer(nextConfig);
