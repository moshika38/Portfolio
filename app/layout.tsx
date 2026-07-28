import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import PageLoader from "@/components/pageLoader";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pamoth Moshika — Mobile & Web Developer",
  description:
    "Portfolio of Pamoth Moshika — Full-stack developer specializing in mobile and web applications with Flutter, React, Next.js, and modern tech stacks.",
  keywords: [
    "Pamoth Moshika",
    "portfolio",
    "developer",
    "Flutter",
    "React",
    "Next.js",
    "web developer",
    "mobile developer",
  ],
  openGraph: {
    title: "Pamoth Moshika — Mobile & Web Developer",
    description:
      "Full-stack developer specializing in mobile and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} ${satoshi.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <PageLoader />
        <div className="page-content">
          <div className="noise-overlay" aria-hidden="true" />
          <div className="premium-bg fixed inset-0 pointer-events-none" aria-hidden="true" />
          {children}
        </div>
      </body>
    </html>
  );
}
