import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      {
        // Only the legacy Vercel production hostname. Dots are escaped because `has.value`
        // is matched as a regex; www.carissaqureshi.com and preview URLs never match.
        source: "/:path*",
        has: [{ type: "host", value: "carissaqureshi\\.vercel\\.app" }],
        destination: "https://www.carissaqureshi.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
