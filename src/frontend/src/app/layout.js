import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navbar/Navigation";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/authProvider/AuthProvider";

import LayoutProvider from "./layoutProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Craft Shop",
  description: "Online Shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative ${inter.variable}">
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
          {/* <LayoutProvider>
          {children}
        </LayoutProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
