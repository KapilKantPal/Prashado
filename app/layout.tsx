import type { Metadata } from "next";
import { Poppins, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashado | Sattvik Cloud Kitchen",
  description: "Freshly prepared, hygienic vegetarian food made without onion and garlic. Sattvik Bites, Chill Vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${dancingScript.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
