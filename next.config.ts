import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    serverExternalPackages: ["@prisma/client", ".prisma/client"],
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
