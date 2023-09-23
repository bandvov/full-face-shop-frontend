"use client";
import Header from "../components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";
import { Box } from "@mui/material";

export const metadata = {
  title: "Full face",
  description: "All you need for your puppy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Box
            sx={{
              margin: {
                xs: "0 16px",
                sm: "0 26px",
                lg: "0 150px",
              },
            }}
          >
            <Header />
            {children}
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
