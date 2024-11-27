import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shippex",
  description: "A shipment tracker",
};

export const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
