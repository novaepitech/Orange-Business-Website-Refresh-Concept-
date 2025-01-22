import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: [
            "https://orange-business-website-refresh-concept-m53f-jsac5yeyo.vercel.app",
            "*",
            "**",
        ],
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
