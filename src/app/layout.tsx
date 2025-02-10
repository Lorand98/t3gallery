import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "~/_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <NextSSRPlugin /**
       * The `extractRouterConfig` will extract **only** the route configs
       * from the router to prevent additional information from being
       * leaked to the client. The data passed to the client is the same
       * as if you were to fetch `/api/uploadthing` directly.
       */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
