"use client";
import Header from "../components/header";
import "./globals.css";
import Footer from "../components/footer";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";
import { Box, Container } from "@mui/material";

export const metadata = {
  title: "Full face",
  description: "All you need for your puppy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
