import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["*", "**"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "*",
            },
            {
                protocol: "https",
                hostname: "**",
                port: "**",
            },
        ],
    },
};

export default nextConfig;
