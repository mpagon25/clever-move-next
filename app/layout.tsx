import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { montserrat } from "@/fonts";

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
          <div className="pt-25 max-w-[1168px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
