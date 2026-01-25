import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autopilot SOP - Turn Videos into Executable SOPs",
  description: "Convert training videos into structured, editable SOPs and turn them into AI-powered, executable processes your team actually follows.",
  keywords: ["SOP", "Standard Operating Procedures", "AI", "Video to SOP", "Process Management", "Team Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}

