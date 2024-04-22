import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restore Old Images",
  description: "Restore old images using deep learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
