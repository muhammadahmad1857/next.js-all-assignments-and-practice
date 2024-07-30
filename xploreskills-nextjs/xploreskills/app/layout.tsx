"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./(components)/footer";
import Navbar from "./(components)/header";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore Skills",
  description: "developed by Ahmad Jawad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
        />
      </head>
      <body className={inter.className}>        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider></body>
      <Footer />
    </html>
  );
}
