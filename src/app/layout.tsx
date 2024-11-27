import {ReactNode} from "react";
import type { Metadata } from "next";
import { Sora } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Devork",
    default: "Devork"
  },
  description: "A perfect workspace for developers.",
};

const sora = Sora({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className}`}>
        {children}
      </body>
    </html>
  );
}
