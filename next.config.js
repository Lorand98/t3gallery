import "./src/env.js";
import { withSentryConfig } from "@sentry/nextjs";

const coreConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Only enable Sentry in production
const config =
  process.env.NODE_ENV === "production"
    ? withSentryConfig(coreConfig, {
        org: "lorand",
        project: "javascript-nextjs",
        silent: !process.env.CI,
        widenClientFileUpload: true,
        reactComponentAnnotation: {
          enabled: true,
        },
        disableLogger: true,
        automaticVercelMonitors: true,
      })
    : coreConfig;

export default config;
