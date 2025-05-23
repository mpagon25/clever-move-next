import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import NavBar from "./ui/nav-bar/nav-bar";
import Footer from "./ui/footer/footer";

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
        <div className="flex justify-center">
          <div className="pt-25 max-w-[1168px] w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
