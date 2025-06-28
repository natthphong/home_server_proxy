import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const base = process.env.NEXT_PUBLIC_EXTERNAL_API_BASE_URL || "";
    return [
      {
        source: "/:service/api/v1/:path*",
        destination: `${base}/:service/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
