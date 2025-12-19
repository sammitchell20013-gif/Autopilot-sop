import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autopilot SOP - Turn Videos into Executable SOPs with AI",
  description: "Convert training videos into structured, editable SOPs and turn them into AI-powered, executable processes your team actually follows. Save time, reduce errors, and scale your operations.",
  keywords: ["SOP", "Standard Operating Procedures", "AI", "Video to SOP", "Process Management", "Team Management", "AI SOP", "SOP Software", "Process Automation"],
  authors: [{ name: "Autopilot SOP" }],
  creator: "Autopilot SOP",
  publisher: "Autopilot SOP",
  metadataBase: new URL("https://autopilotsop.com"),
  alternates: {
    canonical: "https://autopilotsop.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autopilotsop.com",
    title: "Autopilot SOP - Turn Videos into Executable SOPs with AI",
    description: "Convert training videos into structured, editable SOPs and turn them into AI-powered, executable processes your team actually follows.",
    siteName: "Autopilot SOP",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Autopilot SOP - AI-Powered SOP Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autopilot SOP - Turn Videos into Executable SOPs with AI",
    description: "Convert training videos into structured, editable SOPs and turn them into AI-powered, executable processes your team actually follows.",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

