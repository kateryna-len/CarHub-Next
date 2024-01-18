import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "../../components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: `Discover world's best car showcase application`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
