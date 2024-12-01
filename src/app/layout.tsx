import type { Metadata } from "next";
import "./css/globals.css";
import { Container } from "@mui/material";

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
      <body>
        <Container maxWidth="md">{children}</Container>
      </body>
    </html>
  );
}
