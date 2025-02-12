import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  console.log(process.env.NEXT_RUNTIME, process.env.NODE_ENV);
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("../sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("../sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
