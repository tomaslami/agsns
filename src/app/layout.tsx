import type { Metadata } from "next";
import { Mona_Sans } from 'next/font/google';
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ['latin'],
  variable: '--font-mona-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AGSNS",
  description: "Soluciones técnicas especializadas para el sector joyero y talleres artesanales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
