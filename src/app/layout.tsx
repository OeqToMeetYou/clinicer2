import type { Metadata } from "next";
import "./globals.css";
import FloatingChat from "./Componnents/Floating";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingChat/>
      </body>
    </html>
  );
}
