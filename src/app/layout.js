import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full face",
  description: "All you need for your puppy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} lg:px-40`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
