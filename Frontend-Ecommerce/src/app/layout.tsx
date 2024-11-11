import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import Footer from "@/components/footer";
import Navigation from "../components/navigation";
import { CarritoProvider } from "./carrito/carritoContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col w-full`}
      >
        <CarritoProvider>
          <Navigation />
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </CarritoProvider>
      </body>
    </html>
  );
}