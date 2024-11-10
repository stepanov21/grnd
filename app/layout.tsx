import type { Metadata } from "next";
import "./globals.css";
import Header from "@/widgets/header/Header";

export const metadata: Metadata = {
  title: "GRND",
  description: "Site Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased py-10 bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
