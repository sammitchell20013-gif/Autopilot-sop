import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autopilot SOP - Turn Videos into Executable SOPs",
  description: "Convert training videos into structured, editable SOPs and turn them into AI-powered, executable processes your team actually follows.",
  keywords: ["SOP", "Standard Operating Procedures", "AI", "Video to SOP", "Process Management", "Team Management"],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Autopilot SOP",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // For iPhone notch support
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

