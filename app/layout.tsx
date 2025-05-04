import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import NavBar from "./ui/nav-bar/nav-bar";

export const metadata: Metadata = {
  title: "Clever Move",
  description: "Website of moving company Clever Move",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
